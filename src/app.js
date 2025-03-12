document.addEventListener("DOMContentLoaded", () => {
    
    const canvasContainer = document.getElementById('canvas-container');
    const canvas = document.getElementById('price-history');
    
    window.addEventListener('resize', () => {
        const contWidth = canvasContainer.clientWidth; 
        const contHeight = canvasContainer.clientHeight; 
    
        canvas.width = contWidth;
        canvas.height = contHeight;
    
        canvas.style.width = `${contWidth}px`;
        canvas.style.height = `${contHeight}px`;
    
    }); 

}); 



