
      // auto generated
      //var self;

      // class constructor:
      function QCompleter() {
        

        // should be QCompleter_BaseJs.call(this, engine):
        //QCompleter.prototype = new QCompleter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QCompleter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QCompleter);
                
            //}
          }
          else {
            qWarning("QCompleter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QCompleter_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QCompleter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCompleter);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QCompleter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QCompleter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCompleter);
  }

  
  else {
    
        print("QCompleter(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
          
        }

        

      }

      //QCompleter.prototype = new QCompleter_BaseJs(engine);
      //QCompleter.prototype = new QCompleter_Wrapper(engine);
      QCompleter.prototype = new Object();

      QCompleter.prototype.toString = function() {
          //return "QCompleter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QCompleter [JS]";
        };
      QCompleter.getObjectType = function() {
        return RJSType_QCompleter.getIdStatic();
      };

      QCompleter.prototype.getObjectType = function() {
        return RJSType_QCompleter.getIdStatic();
      };

      QCompleter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QCompleter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: CompletionMode
QCompleter.PopupCompletion = QCompleter_Wrapper.PopupCompletion;
QCompleter.UnfilteredPopupCompletion = QCompleter_Wrapper.UnfilteredPopupCompletion;
QCompleter.InlineCompletion = QCompleter_Wrapper.InlineCompletion;

  // enum: ModelSorting
QCompleter.UnsortedModel = QCompleter_Wrapper.UnsortedModel;
QCompleter.CaseSensitivelySortedModel = QCompleter_Wrapper.CaseSensitivelySortedModel;
QCompleter.CaseInsensitivelySortedModel = QCompleter_Wrapper.CaseInsensitivelySortedModel;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QCompleter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QCompleter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      