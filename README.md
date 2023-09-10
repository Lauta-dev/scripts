Para usar estos scripts, requieres algunas dependencias

Debo señalar que estoy usando una distrobución de **GNU/Linux**: **Manjaro**, ditro basada en **ArchLinux**. Para usuario con haci que esto lo hice pensando en las distribuciones de **GNU/Linux**

Me imagino que para otros usuario de Linux si funcionara ya que se mentiene la estructura de carpetas

**git** para clonar el repositorio
```bash
git clone https://github.com/Lauta-dev/scripts.git
```

Instalar **nodejs** 
```bash
sudo pacman -S nodejs
```

Ejecutar **script** (Si prefiere usar **Deno** o **Ban** se puede, solo que **Deno** require permisos)
```bash
node ./script.js
```

| Nombre                | Descripción | Peligro                                                                                | usage                                                                                                                           |
| --------------------- | ----------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [Eliminar node_moduleEliinar node_moduless](./removeNode_modules.js) | Na          | Esto eliminara todas las carpetas de node_modules encontradas sin preguntar al usuario | Solo copie y pege el script en la raiz donde esten todos sus proyectos, seguido de ejecutar el script |
