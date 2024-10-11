# Checks if The Os Detected
checkos() {
    local operatingsystem=arch
    if [ -f /etc/${operatingsystem}-release ]; then
        echo "Arch Btw detected"
        return 0
    else
        echo "Not running on Arch Btw"
        sleep 3
        echo "Exiting..."
        sleep 2
        exit
        return 1
    fi
}

# Function to display the loading animation
display_loading() {
    local ishowspeed=0.05
    local duration=1
    local width=68
    local progress=0
    local step=$((width / duration))
    local spinner=('|' '/' '-' '\')
    local spin_index=0

    echo -ne "\033[?25l"  # Hide cursor

    while [ $progress -le $width ]; do
        printf "\rLoading: ["
        for ((i=0; i<$progress; i++)); do
            printf "#"
        done
        for ((i=$progress; i<$width; i++)); do
            printf " "
        done
        printf "] %3d%% ${spinner[$spin_index]}" $((progress * 100 / width))
        sleep $ishowspeed
        progress=$((progress + 1))
        spin_index=$(( (spin_index + 1) % 4 ))
    done

    printf "\rLoading: ["; printf '%0.s#' $(seq 1 $width); printf "] 100%%\n"
    echo -ne "\033[?25h"  # Show cursor
}

# Main script
checkos
display_loading
sleep 2
clear
sleep 2

# Function to open the browser with index.html
open_browser() {
    local index_path="index.html"
    if [ -f "$index_path" ]; then
        if command -v xdg-open &> /dev/null; then
            xdg-open "$index_path"
        elif command -v open &> /dev/null; then
            open "$index_path"
        else
            printf "Unable to open the browser automatically. Please open $index_path manually."
        fi
    else
        printf "Error: $index_path not found in the current directory."
    fi
}

# Call the function to open the browser
open_browser
sleep 2
echo "Done"