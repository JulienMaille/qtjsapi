
      // auto generated
      //var self;

      // class constructor:
      function QClipboard() {
        

        // should be QClipboard_BaseJs.call(this, engine):
        //QClipboard.prototype = new QClipboard_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QClipboard.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QClipboard);
                
            //}
          }
          else {
            qWarning("QClipboard.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QClipboard.js: No constructor found for class QClipboard");
            
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
              
    this["changed(QClipboard::Mode)"] = Object.getPrototypeOf(this).changed;
  
            }
          
        }

        

      }

      //QClipboard.prototype = new QClipboard_BaseJs(engine);
      //QClipboard.prototype = new QClipboard_Wrapper(engine);
      QClipboard.prototype = new Object();

      QClipboard.prototype.toString = function() {
          //return "QClipboard [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QClipboard [JS]";
        };
      QClipboard.getObjectType = function() {
        return RJSType_QClipboard.getIdStatic();
      };

      QClipboard.prototype.getObjectType = function() {
        return RJSType_QClipboard.getIdStatic();
      };

      QClipboard.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QClipboard.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Mode
QClipboard.Clipboard = QClipboard_Wrapper.Clipboard;
QClipboard.Selection = QClipboard_Wrapper.Selection;
QClipboard.FindBuffer = QClipboard_Wrapper.FindBuffer;
QClipboard.LastMode = QClipboard_Wrapper.LastMode;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QClipboard.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QClipboard.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      