/**
 * 检测当前窗口（或指定窗口）嵌套的层级
 * @param  {Window} self window对象
 * @return {Number}      窗口的层级，0为顶级，没有父窗口
 */
const windowZIndex = (self = window) => {
    // 若是当前窗口没有父窗口，则parent、top指向当前窗口
    let zIndex = 0;

    while (self !== self.parent) {
        zIndex++;
        self = self.parent;
    }

    return zIndex;
};

export default windowZIndex;
