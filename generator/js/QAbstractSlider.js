
      // auto generated
      //var self;

      // class constructor:
      function QAbstractSlider() {
        

        // should be QAbstractSlider_BaseJs.call(this, engine):
        //QAbstractSlider.prototype = new QAbstractSlider_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractSlider.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QAbstractSlider);
                
            //}
          }
          else {
            qWarning("QAbstractSlider.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QAbstractSlider_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QAbstractSlider);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAbstractSlider);
  }

  
  else {
    
        print("QAbstractSlider(): wrong number / type of arguments");
      
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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["valueChanged(int)"] = Object.getPrototypeOf(this).valueChanged;
  
    this["sliderMoved(int)"] = Object.getPrototypeOf(this).sliderMoved;
  
    this["rangeChanged(int,int)"] = Object.getPrototypeOf(this).rangeChanged;
  
    this["actionTriggered(int)"] = Object.getPrototypeOf(this).actionTriggered;
  
            }
          
        }

        

      }

      //QAbstractSlider.prototype = new QAbstractSlider_BaseJs(engine);
      //QAbstractSlider.prototype = new QAbstractSlider_Wrapper(engine);
      QAbstractSlider.prototype = new Object();

      QAbstractSlider.prototype.toString = function() {
          //return "QAbstractSlider [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractSlider [JS]";
        };
      QAbstractSlider.getObjectType = function() {
        return RJSType_QAbstractSlider.getIdStatic();
      };

      QAbstractSlider.prototype.getObjectType = function() {
        return RJSType_QAbstractSlider.getIdStatic();
      };

      QAbstractSlider.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractSlider.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SliderAction
QAbstractSlider.SliderNoAction = QAbstractSlider_Wrapper.SliderNoAction;
QAbstractSlider.SliderSingleStepAdd = QAbstractSlider_Wrapper.SliderSingleStepAdd;
QAbstractSlider.SliderSingleStepSub = QAbstractSlider_Wrapper.SliderSingleStepSub;
QAbstractSlider.SliderPageStepAdd = QAbstractSlider_Wrapper.SliderPageStepAdd;
QAbstractSlider.SliderPageStepSub = QAbstractSlider_Wrapper.SliderPageStepSub;
QAbstractSlider.SliderToMinimum = QAbstractSlider_Wrapper.SliderToMinimum;
QAbstractSlider.SliderToMaximum = QAbstractSlider_Wrapper.SliderToMaximum;
QAbstractSlider.SliderMove = QAbstractSlider_Wrapper.SliderMove;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractSlider.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractSlider.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      