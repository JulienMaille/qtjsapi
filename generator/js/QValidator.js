
      // auto generated
      //var self;

      // class constructor:
      function QValidator() {
        

        // should be QValidator_BaseJs.call(this, engine):
        //QValidator.prototype = new QValidator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QValidator.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QValidator);
                
            //}
          }
          else {
            qWarning("QValidator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QValidator.js: No constructor found for class QValidator");
            
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
            }
          
        }

        

      }

      //QValidator.prototype = new QValidator_BaseJs(engine);
      //QValidator.prototype = new QValidator_Wrapper(engine);
      QValidator.prototype = new Object();

      QValidator.prototype.toString = function() {
          //return "QValidator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QValidator [JS]";
        };
      QValidator.getObjectType = function() {
        return RJSType_QValidator.getIdStatic();
      };

      QValidator.prototype.getObjectType = function() {
        return RJSType_QValidator.getIdStatic();
      };

      QValidator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QValidator.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: State
QValidator.Invalid = QValidator_Wrapper.Invalid;
QValidator.Intermediate = QValidator_Wrapper.Intermediate;
QValidator.Acceptable = QValidator_Wrapper.Acceptable;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QValidator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QValidator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      