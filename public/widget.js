(function() {
    // Obtener la URL del chat dinámicamente desde la API de Next.js
    fetch('http://localhost:3000/api/get-chat-url')  // Cambia a la URL correcta si estás en producción
        .then(response => response.json())
        .then(data => {
            var isOpen = false;

            // Crear el botón flotante
            var button = document.createElement('button');
            button.innerHTML = "Chat";
            button.style.position = "fixed";
            button.style.bottom = "20px";
            button.style.right = "20px";
            button.style.backgroundColor = "#007bff";
            button.style.color = "white";
            button.style.border = "none";
            button.style.borderRadius = "50%";
            button.style.width = "60px";
            button.style.height = "60px";
            button.style.zIndex = "1001";
            button.style.cursor = "pointer";
            button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            document.body.appendChild(button);

            // Crear el iframe del chat
            var iframe = document.createElement('iframe');
            iframe.src = `${data.baseUrl}/chat`;  // Usar la URL base obtenida dinámicamente
            iframe.style.width = "350px";
            iframe.style.height = "500px";
            iframe.style.position = "fixed";
            iframe.style.bottom = "100px"; // Un poco más arriba que el botón
            iframe.style.right = "20px";
            iframe.style.border = "none";
            iframe.style.zIndex = "1000";
            iframe.style.borderRadius = "10px";
            iframe.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            iframe.style.display = "none"; // Oculto por defecto
            document.body.appendChild(iframe);

            // Agregar evento de clic al botón para abrir/cerrar el chat
            button.addEventListener('click', function() {
                isOpen = !isOpen;
                iframe.style.display = isOpen ? "block" : "none";
                button.innerHTML = isOpen ? "X" : "Chat";
            });
        })
        .catch(error => console.error('Error al obtener la URL del chat:', error));
})();
