function LiveVsLocal(){
    this.environment = 'prod';
}

//Check the element for its target tag
//Tag can be omitted on script elements
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

        this.prodV = $(this).data('ly-prod');
        this.localV = $(this).data('ly-local')

        this.checked = $this.checkTarget(this.target, this.tagName, this.index);

        $this.assign(this, this.checked, $this.fetch(this.prodV, this.localV));        
    })
}

//Fetch the value that should be assigned to the element
LiveVsLocal.prototype.fetch = function(prodV, localV){
    $this = this;
    return $this.environment == 'prod' ? prodV : localV;
}
