<div class="row">
	<div class="col-lg-12">
	    <section class="panel">
		    <header class="panel-heading">
				 orderitem Details
			</header>
			<div class="panel-body">
				<form class="form-horizontal row-fluid" method="post" action="<?php echo site_url('site/editorderitemsubmit');?>" enctype= "multipart/form-data">
					<div class="form-row control-group row-fluid" style="display:none;">
						<label class="control-label span3" for="normal-field">Order Item ID</label>
						<div class="controls span9">
						  <input type="text" id="normal-field" class="row-fluid" name="orderitemid" value="<?php echo $beforeorderitem->id;?>">
						</div>
					</div>
					<div class="form-row control-group row-fluid" style="display:none;">
						<label class="control-label span3" for="normal-field">ID</label>
						<div class="controls span9">
						  <input type="text" id="normal-field" class="row-fluid" name="orderid" value="<?php echo $this->input->get('id');?>">
						</div>
					</div>
						
				<div class=" form-group">
				  <label class="col-sm-2 control-label">product</label>
				  <div class="col-sm-4">
					<?php 	 echo form_dropdown('product',$product,set_value('product',$beforeorderitem->product),'id="select2"class="chzn-select form-control" 	data-placeholder="Choose a product..."');
					?>
				  </div>
				</div>		
					
					<div class="form-group">
						<label class="col-sm-2 control-label">&nbsp;</label>
						<div class="col-sm-4">	
							<button type="submit" class="btn btn-info">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</section>
    </div>
</div>