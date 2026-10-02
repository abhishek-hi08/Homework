    
        const inputField = document.getElementById('hello');
        const submitBtn = document.getElementById('submitBtn');
        const outputList = document.getElementById('outputList');

        function processInput() {
            const rawValue = inputField.value;

            outputList.innerHTML = '';
            if (rawValue.trim() === '') {
                outputList.innerHTML = '<li>Please enter some values</li>';
                return;
            }
            const itemsArray = rawValue.split(',');
            itemsArray.forEach(item => {
                const trimmedItem = item.trim();
                if (trimmedItem !== '') {
                    const listItem = document.createElement('li');
                    listItem.textContent = trimmedItem;
   
                    outputList.appendChild(listItem);
                }
            });
            if (outputList.children.length === 0) {
                outputList.innerHTML = '<li>No valid items found</li>';
            }
        }
        submitBtn.addEventListener('click', processInput);