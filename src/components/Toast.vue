<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast" data-delay="10000">
    <div class="toast-header">
      <strong class="mr-auto">Error</strong>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      {{errorMessage}}
    </div>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script>
export  default {
  props: ['errorMessage'],
  watch: {
    errorMessage: function(val, oldVal) {
      if (this.errorMessage) {
        $().toast()
        $('.toast').toast('show')
      }
    }
  }


}
</script>

<style>
.toast {
  position: absolute;
  top: 20%;
  left: 70%;
}
</style>
