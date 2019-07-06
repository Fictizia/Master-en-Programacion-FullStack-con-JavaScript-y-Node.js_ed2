### Comandos por consola 1

**1 -** Crea un script para saber si el usuario es root o no
```bash
#!/bin/bash
if [ "$EUID" == 0 ]
        then echo "User is root"
        exit
else
        echo "User is NOT root"
fi
```


**2 -** Sacar la lista de procesos funcionando en la maquina
```bash
#!/bin/bash
ps -eo comm=
```

```
#resultado esperado
vfs-worker
bash
bash
sudo
/mnt/shared/sbin/tmux
bash
/bin/bash
/mnt/shared/sbin/tmux
ps
/mnt/shared/sbin/tmux
```

**3 -** ¿Cuanto tiempo lleva la máquina funcionando?
```bash
#/bin/bash
uptime -p
```

```
up 5 weeks, 3 days, 9 hours, 14 minutes
```

**4 -** Saca una lista de todas las variables de entorno y guardala en un fichero llamado `env_data.log`
```bash
#!/bin/bash
env > env_data.log
```

```
SHELL=/bin/bash
TERM=xterm-256color
LC_ALL=C.UTF-8
USER=root
SUDO_USER=ubuntu
...
```
