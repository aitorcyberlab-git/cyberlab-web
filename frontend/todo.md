# Cyberlab Forensics - Sitio Web Avanzado de Ciberseguridad

## Guía de Diseño

### Referencias de Diseño (Inspiración Principal)
- **CrowdStrike.com**: Diseño oscuro, tecnológico, enfoque en seguridad
- **Palo Alto Networks**: Interfaz limpia, profesional, moderna
- **Estilo**: Cyberpunk Moderno + Modo Oscuro + Tecnología Avanzada

### Paleta de Colores
- Primario: #0A0A0A (Negro Profundo - fondo)
- Secundario: #1A1A2E (Azul Oscuro - secciones)
- Acento 1: #00FF41 (Verde Neón - CTAs y alertas)
- Acento 2: #00D9FF (Cian Brillante - enlaces y highlights)
- Acento 3: #FF0080 (Magenta - alertas críticas)
- Texto: #FFFFFF (Blanco), #A0A0A0 (Gris Claro - secundario)

### Tipografía
- Heading1: Inter font-weight 800 (56px)
- Heading2: Inter font-weight 700 (42px)
- Heading3: Inter font-weight 600 (32px)
- Body/Normal: Inter font-weight 400 (16px)
- Body/Emphasis: Inter font-weight 600 (16px)
- Navegación: Inter font-weight 700 (18px)
- Código/Técnico: JetBrains Mono font-weight 500 (14px)

### Estilos de Componentes Clave
- **Botones**: Fondo verde neón (#00FF41), texto negro, 8px redondeado, hover: brillo +20%, efecto glow
- **Tarjetas**: Fondo azul oscuro (#1A1A2E), borde cian 1px, 16px redondeado, backdrop-blur
- **Formularios**: Inputs oscuros con borde inferior cian, focus: glow verde neón
- **Chatbot**: Ventana flotante con glassmorphism, bordes redondeados, sombra neón

### Diseño y Espaciado
- Hero section: Altura completa del viewport con efecto parallax y partículas animadas
- Grid de servicios: 3 columnas desktop, 2 tablet, 1 mobile, gaps de 32px
- Padding de secciones: 100px vertical
- Card hover: Elevación 12px con sombra neón, transición 400ms, efecto glow

### Imágenes a Generar
1. **hero-cyber-security-network.jpg** - Red de seguridad cibernética con nodos conectados, estilo futurista, colores neón (Estilo: photorealistic, cyberpunk mood)
2. **threat-detection-dashboard.jpg** - Dashboard de detección de amenazas con gráficos en tiempo real, pantallas holográficas (Estilo: photorealistic, high-tech)
3. **security-team-monitoring.jpg** - Equipo de seguridad monitoreando sistemas, ambiente oscuro con pantallas brillantes (Estilo: photorealistic, professional)
4. **vulnerability-scan-interface.jpg** - Interfaz de escaneo de vulnerabilidades con código y alertas (Estilo: photorealistic, technical)
5. **data-protection-shield.jpg** - Escudo digital protegiendo datos, efecto de partículas y luz (Estilo: 3d, futuristic)
6. **cyber-forensics-analysis.jpg** - Análisis forense digital con código binario y patrones (Estilo: photorealistic, matrix-style)

---

## Tareas de Desarrollo

1. **Configuración Inicial**
   - Copiar logo corporativo a public/assets/
   - Generar todas las 6 imágenes usando ImageCreator
   - Configurar estilos globales con tema oscuro cyberpunk

2. **Componentes Base**
   - Navbar con logo corporativo y navegación sticky
   - Footer con información de contacto y redes sociales
   - Botones personalizados con efectos neón

3. **Página Principal (Index.tsx)**
   - Hero section con animación de partículas y texto impactante
   - Sección "Sobre Nosotros" con estadísticas animadas
   - Grid de servicios con tarjetas interactivas
   - Sección "Por Qué Elegirnos" con iconos animados
   - Sección SOC con lista de características
   - Sección de alianzas con logos de partners
   - CTA final para contacto

4. **Chatbot Interactivo**
   - Componente ChatBot flotante en esquina inferior derecha
   - Interfaz de chat con mensajes predefinidos
   - Respuestas automáticas sobre servicios de ciberseguridad
   - Animaciones de escritura y transiciones suaves
   - Opción de minimizar/maximizar

5. **Escáner de Vulnerabilidades**
   - Componente VulnerabilityScanner
   - Formulario para ingresar URL o dominio
   - Simulación de escaneo con barra de progreso animada
   - Resultados con niveles de riesgo (crítico, alto, medio, bajo)
   - Visualización de vulnerabilidades encontradas
   - Gráficos de estadísticas de seguridad
   - Recomendaciones de seguridad

6. **Animaciones y Efectos**
   - Efecto parallax en hero section
   - Animaciones de scroll reveal
   - Partículas de fondo animadas
   - Efectos hover con glow neón
   - Transiciones suaves entre secciones

7. **Responsive Design**
   - Adaptación para móviles, tablets y desktop
   - Menú hamburguesa para móviles
   - Ajuste de tamaños de fuente y espaciados

8. **Testing y Optimización**
   - Verificar lint sin errores
   - Probar todas las interacciones
   - Optimizar rendimiento de animaciones
   - Verificar responsive en diferentes dispositivos

9. **Build Final**
   - Ejecutar pnpm run lint
   - Ejecutar pnpm run build
   - Verificar que no hay errores