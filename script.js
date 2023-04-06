function MoveBoneco(event) {
            x = event.pageX;
            y = event.pageY;

            boneco.style.left = (x+2) + "px";
            boneco.style.top = (y+2) + "px";
        }

        function sul() {
            boneco.src = "hello.gif";
        }

        function sudeste() {
            boneco.src = "pika.gif";
        }

        function centroOeste() {
            boneco.src = "shark.gif";
        }

        function norte() {
            boneco.src = "banana.gif";
        }

        function nordeste() {
            boneco.src = "nordeste.gif";
        }

        function MostraOriginal() {
            boneco.src = "boneco.gif";
        }