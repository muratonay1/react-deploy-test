export default class PocketQueryFilter {
	constructor() {
        this.query = {};
        this.currentKey = null;
    }

    add(key, value) {
        this.query[key] = value;
        this.currentKey = key;
        return this;
    }

    operator(operator) {
        if (this.currentKey) {
            if (!this.query[this.currentKey]) {
                this.query[this.currentKey] = {};
            }

            if (Object.prototype.toString.call(this.query[this.currentKey]) !== '[object Object]') {
                // Anahtar zaten bir nesne değilse, yeni bir nesne oluşturup değeri null olarak ata
                let temp = this.query[this.currentKey];
                this.query[this.currentKey] = {};
                this.query[this.currentKey][operator] = temp;
            } else {
                this.query[this.currentKey][operator] = null;
            }
        } else {
            console.error('No key specified. Please use add method first.');
        }
        return this.query;
    }
}