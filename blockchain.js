function mine(id) {
			//nonce+id
			var nonce = -1;
			//hash+id
			var hashAnterior = 0;
			//res+id
			var hashAtual = 0;
			//dados+id . hash+id . nonce+id
			var bloco = 0;
			
			if(id != 0) {
				$('[id^="hash'+id+'"]').text($('[id^="res'+(id-1)+'"]').text());
			}
			
			do {
			
				nonce++;
			
				bloco = $('[id^="dados'+id+'"]').val() + $('[id^="hash'+id+'"]').text() + nonce;
				
				hashAtual = sha256.update(bloco);
				
				var temp = hashAtual.array();			
				
			} while(temp[0] != 0 || temp[1] != 0);
			
			$('[id^="res'+id+'"]').html(hashAtual.hex());
			
			$('[id^="nonce'+id+'"]').html(nonce);
	
		}
		
		function isValid(id) {
			
			if(id == 0)
				return true;
				
			if($('[id^="res'+(id-1)+'"]').text() == $('[id^="hash'+id+'"]').text()) {
				return true;
			} else {
				return false;
			}
		}
		
		function newBlock() {
			
			var n = $('[id^="res"]').length;
		
			$(body).append('<div class="ant-card genesis block block-shadow ant-card-bordered" id="bloco'+n+' "> <div class="ant-card-body"> <div> <span class="ant-input-group-wrapper" style="margin-bottom: 20px;"> <span class="ant-input-wrapper ant-input-group"> <span class="ant-input-group-addon"> <span style="margin-right: 7px; margin-left: 7px;"> DADOS </span> </span> <span class="genesis-data genesis-mutate genesis-mutate-2 ant-input-affix-wrapper"> <span class="ant-input-prefix"></span> <input class="/ant-input" value="Digite dados aqui" type="text" id="dados'+n+'"> </span> </span> </span> <div class="genesis-previous-hash" style="margin-bottom: 7px; display: flex; justify-content: flex-start; flex-wrap: nowrap; max-width: 100%; overflow: auto;"> <div style="white-space: nowrap;">HASH ANTERIOR</div> <div data-show="true" class="ant-tag ant-tag-green" style="font-size: 8pt; float: right; font-family: Courier New; cursor: default; display: block; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; border-color: transparent;"> <span class="ant-tag-text" id="hash'+n+'">0000000000000000000000000000000000000000000000000000000000000000</span> </div> </div> <div style="display: flex; justify-content: flex-start; flex-wrap: nowrap; max-width: 100%; overflow: auto;" class="genesis-hash genesis-hash-2 genesis-hash-3"> <div style="margin-right: 15px;">HASH DO BLOCO</div> <div data-show="true" class="ant-tag ant-tag-green" style="display: block; font-size: 9pt; font-family: Courier New; cursor: default; max-width: 100%; overflow: auto;"> <span class="ant-tag-text" id="res'+n+'"></span> </div> </div> <div style="margin-top: 27px; display: flex; justify-content: space-between; align-items: center; flex-wrap: nowrap; text-overflow: ellipsis;"> <div style="font-size: 24px; white-space: nowrap; overflow: auto;"><span style="letter-spacing: 1px;" class="genesis-index">BLOCO INICIAL</span> <span class="genesis-timestamp"><span style="font-weight: 300; font-size: 8pt;"></span></span></div> <div data-show="true" class="ant-tag genesis-mine genesis-nonce" style="cursor: default;"><span class="ant-tag-text" id="nonce'+n+'"></span></div> <button id="0" onclick="mine('+n+');" style="background: rgba(0, 0, 0, 0) linear-gradient(45deg, rgb(0, 198, 255), rgb(0, 114, 255)) repeat scroll 0% 0%; box-shadow: rgba(50, 50, 93, 0.1) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 3px 6px; color: white; border: medium none transparent;" type="button" class="ant-btn ant-btn-circle ant-btn-lg ant-btn-icon-only"><i class="anticon anticon-tool"></i></button></div> </div> </div> </div>');
		
		}