<script>
    var chatindex = "<?php echo site_url();?>";
    base_url = "<?php echo base_url('chatpage');?>/";
</script>



<script src="<?php echo base_url('chatpage'); ?>/lib/js/angular.min.js"></script>
<!--<script src="lib/js/angular-animate.js"></script>-->
<script src="<?php echo base_url('chatpage'); ?>/lib/js/angular-route.min.js"></script>
<!--<script src="lib/js/angular-resource.min.js"></script>-->
<script src="https://cdn.firebase.com/js/client/2.0.6/firebase.js"></script>
<script src="<?php echo base_url('chatpage'); ?>/lib/js/ngDialog.js"></script>
<!--<script src="<?php echo base_url('chatpage'); ?>/lib/js/jquery-1.8.2.min.js"></script>-->
<!--<script src="<?php echo base_url('chatpage'); ?>/lib/js/jquery.dform-1.1.0.js"></script>-->

<link href="<?php echo base_url('chatpage'); ?>/lib/css/ngDialog.css" rel="stylesheet" />
<link href="<?php echo base_url('chatpage'); ?>/lib/css/ngDialog-theme-default.css" rel="stylesheet" />
<link href="<?php echo base_url('chatpage'); ?>/lib/css/ngDialog-theme-plain.css" rel="stylesheet" />

<script src="<?php echo base_url('chatpage'); ?>/js/app.js"></script>
<script src="<?php echo base_url('chatpage'); ?>/js/controllers.js"></script>
<script src="<?php echo base_url('chatpage'); ?>/js/firebaseservices.js"></script>
<script src="https://rawgit.com/dwmkerr/angular-modal-service/master/dst/angular-modal-service.js"></script>
<div ng-app="firstapp">

    <div class="repeated-item" ng-view></div>

</div>
