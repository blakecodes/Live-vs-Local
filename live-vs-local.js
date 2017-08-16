function LiveVsLocal(){
    this.local = "[data-ly-local]";
    this.prod = "[data-ly-prod]";
    this.target = "href";
    this.environment = 'prod';
}


//Check the element for its target tag
//Tag can be omitted on link and script elements
LiveVsLocal.prototype.checkTarget = function(target, tagName, index){
    target == null ? sendWarn('[data-ly-target] is not set, defaulting to src attribute [Ly Index   : ' + index + ']') : false;
    return target == null ? 'src' : target;
}

//Assign the value to the targeted attribute
LiveVsLocal.prototype.assign = function(e, target, value){
    $(e).attr(target, value);
}

//Full run of the script
LiveVsLocal.prototype.run = function(){
    var $this = this;

    $('[data-ly-local]').each(function(index, value){
        this.target = $(this).data('ly-target');
        this.tagName = $(this).get(0).tagName;
        this.index = index;

        this.checked = $this.checkTarget(this.target, this.tagName, this.index);

        $this.assign(this, this.checked, 'value2');

        
    })
}

//Check the environemnt and determine which ly element
//should be used to assign the value
LiveVsLocal.prototype.checkEnv = function(){
    var $this = this;
    console.log($this.environment);
}

var lvl = new LiveVsLocal;