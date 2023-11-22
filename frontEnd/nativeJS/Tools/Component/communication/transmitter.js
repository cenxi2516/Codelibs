/**
 * 组件通信，由通信接收器+通信发送器组成。
 * 发送器 ==> 接收器 ==> 发送器
 */

class Transmitter {
    constructor(currentComponentName, receiverComponentName) {
        this.currentComponentName = currentComponentName;
        this.receiverComponentName = receiverComponentName;
        this.receiveHandler = null;
    }

    // 注销接收器， false表示不存在接收器，true表示注销成功
    logoutReceiver(){
    	if(!this.receiveHandler) return false;

    	window.removeEventListener('message', this.receiveHandler);
    	this.receiveHandler = null;

    	return true;
    }

    // 接收器：一个组件中只能存在一个，新开接收器，会注销之前接收器，使用新开接收器
    receiver(handler) {
    	// 若是已存在接收器，则注销之前接收器，使用新开接收器
    	this.logoutReceiver();

        // 消息接收器
        const receiveHandler = async (event) => {
            const {
                body, // 请求或响应的数据
                isResponse = false, // 是请求还是响应
                senderComponentName, // 发送信息的组件名
                receiverComponentName, // 发送目标组件名
            } = event.data;

            // 若是发送目标组件名 与 当前组件名相同，则接收组件信息
            if (this.currentComponentName !== receiverComponentName) return;

            // 将接收的数据处理后，返回处理结果
            const handleResult = await handler(event.data);

            // 若是响应，则不再进行请求，避免出现请求、响应递归
            if (isResponse) return;

            // 向请求的源，响应处理结果
            window.postMessage({
                isResponse: true,
                senderComponentName: this.currentComponentName,
                receiverComponentName: senderComponentName,
                body: handleResult,
            }, window.origin);
        };

        this.receiveHandler = receiveHandler;

        // 当前窗口接收指定源传输的数据
        window.addEventListener('message', receiveHandler);
    }

    // 发送器
    sender(data) {
        window.postMessage({
            isResponse: false,
            senderComponentName: this.currentComponentName,
            receiverComponentName: this.receiverComponentName,
            body: data,
        }, window.origin);
    }
}


const useTransmitter = (currentComponentName, receiverComponentName) => {
    const transmitter = new Transmitter(currentComponentName, receiverComponentName);

    return [
        transmitter.sender.bind(transmitter),
        transmitter.receiver.bind(transmitter),
        transmitter.logoutReceiver.bind(transmitter)
    ]
};

export default useTransmitter;

/**
 * 在组件中使用案例：
 * 发送器：组件A => 组件B
 * 接收器：组件A
 *
 * 发送的信息，响应的信息，可以是任何数据，不能包含方法。
 */
/*const [sender, receiver, logoutReceiver] = useTransmitter('组件A', '组件B');

// 向组件B发送信息
sender({
	a: '123'
});

// 接收向组件A发送的信息
receiver((data) => {
	const {isResponse, body} = data;
	if(isResponse){
		// 组件A发送数据的响应

	} else {
		// 组件A接收的请求，返回值即为组件A请求后的响应

	}
});

// logoutReceiver表示注销接收器，不允许接收信息
*/
