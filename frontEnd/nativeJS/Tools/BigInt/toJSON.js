/**
 * JSON.stringify()序列化BigInt值，会调用此方法返回序列化结果
 * @return {String} 序列化结果
 */
BigInt.prototype.toJSON = function(){
	return this.toString();
};
