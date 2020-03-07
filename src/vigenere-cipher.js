class VigenereCipheringMachine {
    encrypt(message, key) {
            let alphabet = ['a', 'b', 'c', 'd',  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let cipher = [];
            let newKey;
            let indexOfMessage = [];
            let indexOfKey = [];
            let indexOfCipher = [];
            let littleMessage = message.toLowerCase();
            let littleKey = key.toLowerCase(); 
    
            newKey = littleKey.padEnd(message.length, littleKey);
            
            for (let i = 0; i < message.length; i++) {
                for (let j = 0; j < alphabet.length; j++) {
                    if (littleMessage[i] == alphabet[j]) {
                    indexOfMessage.push(j);
                    }  
                } 
            }
      for (let i = 0; i < message.length; i++) {
                if (message[i] == " ") {
                    indexOfMessage.splice(i, 0, 'message[i]');
                }
        
            }
            for (let i = 0; i < newKey.length; i++) {
                for (let j = 0; j < alphabet.length; j++) {
                    if (newKey[i] == alphabet[j]) {
                        indexOfKey.push(j);
                    }
                }
            }
            for (let i = 0; i < message.length; i++) {
                if (littleMessage[i] == " ") {
                    indexOfKey.splice(i, 0, 'message[i]');
                }
       
            }
    
           for (let i = 0; i < message.length; i++) {
               if ((indexOfMessage[i] + indexOfKey[i]) > 26) {
               indexOfCipher[i] = (indexOfMessage[i] + indexOfKey[i]) % 26;
           } else {
               indexOfCipher[i] = (indexOfMessage[i] + indexOfKey[i]) % 26;
           }
        }
           for (let i = 0; i < indexOfCipher.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (indexOfCipher[i] == j) {
                    cipher.push(alphabet[j]);
                } else if (isNaN(indexOfCipher[i])) {
                  cipher[i] = littleMessage[i];
                }
     
            }
         } 
         
          
         return cipher.join('').toUpperCase();  
        };

    decrypt(encryptedMessage, key) {
        let alphabet = ['a', 'b', 'c', 'd',  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let decrypt = [];
        let newKey;
        let indexOfEncryptedMessage = [];
        let indexOfKey = [];
        let indexOfDecrypt = [];
        let littleEncryptedMessage = encryptedMessage.toLowerCase();
        let littleKey = key.toLowerCase(); 
    
            newKey = littleKey.padEnd(encryptedMessage.length, littleKey);
            
            for (let i = 0; i < littleEncryptedMessage.length; i++) {
                for (let j = 0; j < alphabet.length; j++) {
                    if (littleEncryptedMessage[i] == alphabet[j]) {
                    indexOfEncryptedMessage.push(j);
                    }  
                } 
            }
      for (let i = 0; i < littleEncryptedMessage.length; i++) {
                if (littleEncryptedMessage[i] == " ") {
                    indexOfEncryptedMessage.splice(i, 0, 'message[i]');
                }
        
            }
            for (let i = 0; i < newKey.length; i++) {
                for (let j = 0; j < alphabet.length; j++) {
                    if (newKey[i] == alphabet[j]) {
                        indexOfKey.push(j);
                    }
                }
            }
            for (let i = 0; i < littleEncryptedMessage.length; i++) {
                if (littleEncryptedMessage[i] == " ") {
                    indexOfKey.splice(i, 0, 'message[i]');
                }
       
            }
    
           for (let i = 0; i < littleEncryptedMessage.length; i++) {
               if ((indexOfEncryptedMessage[i] - indexOfKey[i] + 26) > 26) {
               indexOfDecrypt[i] = (indexOfEncryptedMessage[i] - indexOfKey[i]) % 26;
           } else {
               indexOfDecrypt[i] = (indexOfEncryptedMessage[i] - indexOfKey[i] + 26) % 26;
           }
        }
           for (let i = 0; i < indexOfDecrypt.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (indexOfDecrypt[i] == j) {
                    decrypt.push(alphabet[j]);
                } else if (isNaN(indexOfDecrypt[i])) {
                  decrypt[i] = littleEncryptedMessage[i];
                }
     
            }
         }
         return decrypt.join('').toUpperCase();  
        
    }
}

module.exports = VigenereCipheringMachine;
