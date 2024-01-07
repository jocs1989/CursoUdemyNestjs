
#!/bin/bash

# Definir códigos de color
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No color
echo -e "${BLUE}##########################################################${NC}"
echo -e  "${GREEN}Actualizando medios solo funciona en ubuntu y debian...............${NC}"
echo -e "${BLUE}##########################################################${NC}"

apt update &&  apt upgrade -y

echo -e "${BLUE}##########################################################${NC}"
echo -e  "${GREEN}Instalando wget...............${NC}"
echo -e "${BLUE}##########################################################${NC}"
apt install wget -y 
echo "${BLUE}##########################################################${NC}"
echo "${GREEN}Instalando curl...............${NC}"
echo "${BLUE}##########################################################${NC}"
apt install curl -y
echo "${BLUE}##########################################################${NC}"
echo "${GREEN}Instalando git...............${NC}"
echo "${BLUE}##########################################################${NC}"
apt install git 
echo -e "${BLUE}##########################################################${NC}"
echo -e  "${GREEN}Instalando zsh...............${NC}"
echo -e "${BLUE}##########################################################${NC}"
apt install zsh -y
echo -e  "${GREEN}Instalando zsh...............${NC}"
zsh --version
echo -e  "${GREEN}Estableciendo configuracion de termina zsh predeterminada...............${NC}"
chsh -s $(which zsh) -y
echo -e "${BLUE}##########################################################${NC}"
echo -e  "${GREEN}Instalando ohmyzsh...............${NC}"
echo -e "${BLUE}##########################################################${NC}"
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" 

git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k

echo -e "${BLUE}##########################################################${NC}"
echo -e  "${GREEN}Instalando Pluglins...............${NC}"
echo -e  "${GREEN}autosuggesions plugin...............${NC}"
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
echo -e  "${GREEN}zsh-syntax-highlighting plugin plugin...............${NC}"
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
echo -e  "${GREEN}zsh-fast-syntax-highlighting plugin...............${NC}"
git clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/fast-syntax-highlighting
echo -e  "${GREEN}zsh-autocomplete plugin...............${NC}"
git clone --depth 1 -- https://github.com/marlonrichert/zsh-autocomplete.git $ZSH_CUSTOM/plugins/zsh-autocomplete
echo -e "${BLUE}##########################################################${NC}"
echo -e  "${GREEN}Open .zshrc...............${NC}"
echo -e  "${GREEN}Busca la variable plugins= ...............${NC}"
echo -e  "${GREEN} agregala asi plugins=(git zsh-autosuggestions zsh-syntax-highlighting fast-syntax-highlighting zsh-autocomplete)...............${NC}"
echo -e  "${GREEN}Busca la variable  ZSH_THEME= ...............${NC}"
echo -e  "${GREEN} ZSH_THEME="powerlevel10k/powerlevel10k"...............${NC}"
echo -e  "${GREEN} una vez terminado agrega tu fuente nerd font y teclea esto...............${NC}"
echo -e  "${GREEN} p10k configure...............${NC}"
echo -e "${BLUE}##########################################################${NC}"
echo -e  "${GREEN}Configuracion Tokyo Nigh ...............${NC}"
echo -e "\e[48;2;26;27;38;2;169;177;214mNegro: #1a1b26\e[0m"
echo -e "\e[48;2;247;118;142mRojo: #f7768e\e[0m"
echo -e "\e[48;2;158;206;106mVerde: #9ece6a\e[0m"
echo -e "\e[48;2;224;175;104mAmarillo: #e0af68\e[0m"
echo -e "\e[48;2;122;162;247mAzul: #7aa2f7\e[0m"
echo -e "\e[48;2;187;154;247mMagenta: #bb9af7\e[0m"
echo -e "\e[48;2;125;207;255mCian: #7dcfff\e[0m"
echo -e "\e[48;2;169;177;214mBlanco: #a9b1d6\e[0m"
echo -e "\e[48;2;103;110;149mNegro brillante: #676e95\e[0m"
echo -e "\e[48;2;255;110;103mRojo brillante: #ff6e67\e[0m"
echo -e "\e[48;2;179;244;74mVerde brillante: #b3f44a\e[0m"
echo -e "\e[48;2;255;213;128mAmarillo brillante: #ffd580\e[0m"
echo -e "\e[48;2;173;223;255mAzul brillante: #addfff\e[0m"
echo -e "\e[48;2;255;178;255mMagenta brillante: #ffb2ff\e[0m"
echo -e "\e[48;2;158;206;255mCian brillante: #9eceff\e[0m"
echo -e "\e[48;2;192;202;245mBlanco brillante: #c0caf5\e[0m"
echo -e "\e[48;2;26;27;38;2;169;177;214mFondo: #1a1b26\e[0m"
echo -e "\e[38;2;169;177;214mPrimer plano: #a9b1d6\e[0m"
echo -e "\e[38;2;169;177;214mTexto del cursor: #a9b1d6\e[0m"
echo -e "\e[38;2;169;177;214mCursor mismo: #a9b1d6\e[0m"
echo -e "\e[38;2;103;110;149mTexto seleccionado: #a9b1d6\e[0m"
echo -e "\e[48;2;103;110;149mFondo seleccionado: #676e95\e[0m"
