/**
 *
 * @author İsmet Murat Onay
 */
let PocketUtility = (
	function () {
		/**
		 * @example
		 * format : hour:minute AM/PM
		 * 18:57 PM
		 * 09:37 AM
		 */
		function GetRealTime() {
			let time = new Date();
			let hour = time.getHours().toString();
			hour = hour.length === 1 ? '0' + hour : hour;
			let minutes = time.getMinutes().toString();
			minutes = minutes.length === 1 ? '0' + minutes : minutes;
			let second = time.getSeconds().toString();
			second = second.length === 1 ? '0' + second : second;
			let result = hour + minutes + second;
			return result;
		}

		/**
		 * @param {String} format "yyyyMMdd" "yyyyDDmm" "ddMMyyyy" "mmDDyyyy" Default('yyyyMMdd')
		 * @param {String} seperate {'-', '/', '.'}
		 *
		 */
		function GetRealDate(format, separate) {
			function isSeparated() {
				return separate !== undefined ? true : false;
			}

			let date = new Date();
			let fullDate = "";

			let day =
				date.getDate().toString().length === 1
					? "0" + date.getDate()
					: date.getDate();
			let month =
				(date.getMonth() + 1).toString().length === 1
					? "0" + (date.getMonth() + 1)
					: (date.getMonth() + 1);
			let year = date.getFullYear();

			let DEFAULT = year.toString() + month.toString() + day.toString();
			let SEPARATED =
				year.toString() + separate + month.toString() + separate + day.toString();

			if (format === undefined) fullDate = DEFAULT;
			if (format === "yyyyMMdd") fullDate = !isSeparated() ? DEFAULT : SEPARATED;

			return fullDate;
		}
		/**
		 * @return
		 * return generateId format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaa'
		 */
		function GenerateOID() {
			let s4 = () => {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString()
					.substring(1);
			};
			//return id format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaa'
			return (
				s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4()
			);
		}


		function TimeStamp() {
			return Date.now();
		}

		function convertUnixTimestamp(unixTimestamp) {
			const date = new Date(unixTimestamp);

			const year = date.getFullYear();
			const month = String(date.getMonth() + 1).padStart(2, '0');
			const day = String(date.getDate()).padStart(2, '0');
			const hours = String(date.getHours()).padStart(2, '0');
			const minutes = String(date.getMinutes()).padStart(2, '0');
			const seconds = String(date.getSeconds()).padStart(2, '0');
			const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

			return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
		}

		function LoggerTimeStamp(params) {
			return convertUnixTimestamp(TimeStamp());
		}
		/**
		 *
		 * @param {any} obj
		 * @returns {Boolean}
		 */
		function isEmptyObject(object) {
			for (let checker in object) {
				return !1;
			}
			return !0;
		}
		/**
		 *
		 * @param {String} str
		 */
		function ReverseString(str) {
			return str.split("").reverse().join("");
		}

		function isObject(value) {
			return Object.prototype.toString.call(value) === "[object Object]"
		}
		function isArray(value) {
			return Object.prototype.toString.call(value) === "[object Array]"
		}
		function isString(value) {
			return Object.prototype.toString.call(value) === "[object String]"
		}

		return {
			GetRealTime: GetRealTime,
			GetRealDate: GetRealDate,
			GenerateOID: GenerateOID,
			ReverseString: ReverseString,
			isEmptyObject: isEmptyObject,
			TimeStamp: TimeStamp,
			isObject: isObject,
			isArray: isArray,
			isString: isString,
			LoggerTimeStamp: LoggerTimeStamp
		}
	}
)();
export default PocketUtility;