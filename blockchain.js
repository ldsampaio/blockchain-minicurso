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