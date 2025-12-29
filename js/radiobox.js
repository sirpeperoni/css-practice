document.addEventListener('DOMContentLoaded', function() {
    const toggleGetAQuote = document.getElementById('toggleGetAQuote');
    const toggleSayHi = document.getElementById('toggleSayHi');

    let currentSelection = null;
    
    function handleClick(e) {
        
        const checkbox = this;
        
        if (checkbox === currentSelection) {
            checkbox.checked = false;
            currentSelection = null;
        } else {
            checkbox.checked = true;
            currentSelection = checkbox;

            if (checkbox === toggleGetAQuote) {
                toggleSayHi.checked = false;
            } else {
                toggleGetAQuote.checked = false;
            }
        }
        
    }
    
    toggleGetAQuote.addEventListener('click', handleClick);
    toggleSayHi.addEventListener('click', handleClick);
});