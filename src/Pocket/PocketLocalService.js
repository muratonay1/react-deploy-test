// services/PocketLocalService.js
import Pocket from './Pocket';
import PocketLog from './PocketLog';
import PocketUtility from './PocketUtility';
class PocketLocalService {
     /**
      *
      * @param {String} serviceName /Service klasöründeki servis ismi
      * @param {Pocket} parameter
      * @returns
      */
     static executeService(serviceName, parameter, callback) {
          import(`../Service/${serviceName}`)
               .then(res => {
                    res.default(parameter)
                         .then((serviceResponse) => {
                              let servicePocket = new Pocket();
                              servicePocket.put("data", serviceResponse);
                              servicePocket.put("timestamp", PocketUtility.TimeStamp());
                              PocketLog.info(`Tetiklenen Servis: ${serviceName} `)
                              callback(servicePocket);
                         })
               })
               .catch(error => {
                    console.error(`${serviceName} Servis yükleme hatası:`, error);
                    throw error; // veya callback içinde hata ile ilgili bir işlem yapabilirsiniz
               });
     }
     /**
      *
      * @param {Pocket} criteria
      * @param {String} mandatoryFields
      * @returns
      */
     static parameterMustBeFill(criteria, mandatoryFields) {
          if (!criteria.exist(mandatoryFields)) {
               throw new Error("'" + mandatoryFields + "'" + ' parameter must be filled.');
          }
          return true;
     }

};

function execute(fn) {
     return function (...args) {
          PocketLog.info("PocketServis tetiklendi.");
          return fn(...args);
     };
}

export default PocketLocalService;
export { execute };
