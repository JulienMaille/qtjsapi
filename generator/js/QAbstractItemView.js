
      // auto generated
      //var self;

      // class constructor:
      function QAbstractItemView() {
        

        // should be QAbstractItemView_BaseJs.call(this, engine):
        //QAbstractItemView.prototype = new QAbstractItemView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractItemView.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QAbstractItemView);
                
            //}
          }
          else {
            qWarning("QAbstractItemView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractItemView.js: No constructor found for class QAbstractItemView");
            
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
  
    this["pressed(QModelIndex)"] = Object.getPrototypeOf(this).pressed;
  
    this["clicked(QModelIndex)"] = Object.getPrototypeOf(this).clicked;
  
    this["doubleClicked(QModelIndex)"] = Object.getPrototypeOf(this).doubleClicked;
  
    this["activated(QModelIndex)"] = Object.getPrototypeOf(this).activated;
  
    this["entered(QModelIndex)"] = Object.getPrototypeOf(this).entered;
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
            }
          
        }

        

      }

      //QAbstractItemView.prototype = new QAbstractItemView_BaseJs(engine);
      //QAbstractItemView.prototype = new QAbstractItemView_Wrapper(engine);
      QAbstractItemView.prototype = new Object();

      QAbstractItemView.prototype.toString = function() {
          //return "QAbstractItemView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractItemView [JS]";
        };
      QAbstractItemView.getObjectType = function() {
        return RJSType_QAbstractItemView.getIdStatic();
      };

      QAbstractItemView.prototype.getObjectType = function() {
        return RJSType_QAbstractItemView.getIdStatic();
      };

      QAbstractItemView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractItemView.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QAbstractItemView.NoFrame = QAbstractItemView_Wrapper.NoFrame;
QAbstractItemView.Box = QAbstractItemView_Wrapper.Box;
QAbstractItemView.Panel = QAbstractItemView_Wrapper.Panel;
QAbstractItemView.WinPanel = QAbstractItemView_Wrapper.WinPanel;
QAbstractItemView.HLine = QAbstractItemView_Wrapper.HLine;
QAbstractItemView.VLine = QAbstractItemView_Wrapper.VLine;
QAbstractItemView.StyledPanel = QAbstractItemView_Wrapper.StyledPanel;

  // enum: Shadow
QAbstractItemView.Plain = QAbstractItemView_Wrapper.Plain;
QAbstractItemView.Raised = QAbstractItemView_Wrapper.Raised;
QAbstractItemView.Sunken = QAbstractItemView_Wrapper.Sunken;

  // enum: StyleMask
QAbstractItemView.Shadow_Mask = QAbstractItemView_Wrapper.Shadow_Mask;
QAbstractItemView.Shape_Mask = QAbstractItemView_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QAbstractItemView.AdjustIgnored = QAbstractItemView_Wrapper.AdjustIgnored;
QAbstractItemView.AdjustToContentsOnFirstShow = QAbstractItemView_Wrapper.AdjustToContentsOnFirstShow;
QAbstractItemView.AdjustToContents = QAbstractItemView_Wrapper.AdjustToContents;

  // enum: SelectionMode
QAbstractItemView.NoSelection = QAbstractItemView_Wrapper.NoSelection;
QAbstractItemView.SingleSelection = QAbstractItemView_Wrapper.SingleSelection;
QAbstractItemView.MultiSelection = QAbstractItemView_Wrapper.MultiSelection;
QAbstractItemView.ExtendedSelection = QAbstractItemView_Wrapper.ExtendedSelection;
QAbstractItemView.ContiguousSelection = QAbstractItemView_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
QAbstractItemView.SelectItems = QAbstractItemView_Wrapper.SelectItems;
QAbstractItemView.SelectRows = QAbstractItemView_Wrapper.SelectRows;
QAbstractItemView.SelectColumns = QAbstractItemView_Wrapper.SelectColumns;

  // enum: ScrollHint
QAbstractItemView.EnsureVisible = QAbstractItemView_Wrapper.EnsureVisible;
QAbstractItemView.PositionAtTop = QAbstractItemView_Wrapper.PositionAtTop;
QAbstractItemView.PositionAtBottom = QAbstractItemView_Wrapper.PositionAtBottom;
QAbstractItemView.PositionAtCenter = QAbstractItemView_Wrapper.PositionAtCenter;

  // enum: EditTrigger
QAbstractItemView.NoEditTriggers = QAbstractItemView_Wrapper.NoEditTriggers;
QAbstractItemView.CurrentChanged = QAbstractItemView_Wrapper.CurrentChanged;
QAbstractItemView.DoubleClicked = QAbstractItemView_Wrapper.DoubleClicked;
QAbstractItemView.SelectedClicked = QAbstractItemView_Wrapper.SelectedClicked;
QAbstractItemView.EditKeyPressed = QAbstractItemView_Wrapper.EditKeyPressed;
QAbstractItemView.AnyKeyPressed = QAbstractItemView_Wrapper.AnyKeyPressed;
QAbstractItemView.AllEditTriggers = QAbstractItemView_Wrapper.AllEditTriggers;

  // enum: ScrollMode
QAbstractItemView.ScrollPerItem = QAbstractItemView_Wrapper.ScrollPerItem;
QAbstractItemView.ScrollPerPixel = QAbstractItemView_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
QAbstractItemView.NoDragDrop = QAbstractItemView_Wrapper.NoDragDrop;
QAbstractItemView.DragOnly = QAbstractItemView_Wrapper.DragOnly;
QAbstractItemView.DropOnly = QAbstractItemView_Wrapper.DropOnly;
QAbstractItemView.DragDrop = QAbstractItemView_Wrapper.DragDrop;
QAbstractItemView.InternalMove = QAbstractItemView_Wrapper.InternalMove;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractItemView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractItemView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      