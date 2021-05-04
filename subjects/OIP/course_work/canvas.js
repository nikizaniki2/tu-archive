var c = document.getElementById("canvasPlot");
            var ctx = c.getContext("2d");
            ctx.fillStyle = "#fafaff";
      ctx.fillRect(0, 0, c.width, c.height);
            function clean()
            { 
              ctx.fillStyle = "#fafaff";
                ctx.clearRect(0, 0, c.width, c.height);
                ctx.fillRect(0, 0, c.width, c.height);
            }
            function draw()
            {
                var H = 156;
                var J = 252;
                if(document.data.H.value) H = 3 * Number(document.data.H.value);
                if(document.data.J.value) J = 3 * Number(document.data.J.value);
                
                var totalWidth = 561 + J;
                
                console.log(totalWidth);
                
                //axis
                ctx.beginPath();
                ctx.setLineDash([15, 5, 2, 5]);
                ctx.lineWidth = "1";
                ctx.moveTo(3, 250);
                ctx.lineTo(totalWidth + 3, 250);
                ctx.strokeStyle = '#000000';
                ctx.stroke();
                
                //element start
                ctx.beginPath();
                ctx.setLineDash([0, 0, 0, 0]);
                ctx.lineWidth = "2";
                ctx.moveTo(5, 205 + 3 * Math.sqrt(2));
                ctx.lineTo(5, 295 - 3 * Math.sqrt(2));
                ctx.lineTo(5 + 3 * Math.sqrt(2), 295);
                ctx.moveTo(5, 205 + 3 * Math.sqrt(2));
                ctx.lineTo(5 + 3 * Math.sqrt(2), 205);
                ctx.lineTo(5 + 3 * Math.sqrt(2), 295);
                ctx.lineTo(103 - 3 * Math.sqrt(2), 295);
                ctx.moveTo(5 + 3 * Math.sqrt(2), 205);
                ctx.lineTo(103 - 3 * Math.sqrt(2), 205);
                ctx.moveTo(103 - 3 * Math.sqrt(2), 196);
                ctx.lineTo(103 - 3 * Math.sqrt(2), 304);
                ctx.lineTo(359, 304);
                ctx.moveTo(103 - 3 * Math.sqrt(2), 196);
                ctx.lineTo(359, 196);
                ctx.moveTo(359, 178);
                ctx.lineTo(359, 322);
                ctx.lineTo(489, 322);
                ctx.moveTo(359, 178);
                ctx.lineTo(489, 178);
                ctx.lineTo(489, 322);
                ctx.moveTo(489, 185.5);
                ctx.lineTo(495, 185.5);
                ctx.lineTo(495, 314.5);
                ctx.lineTo(489, 314.5);
                //non-changing H part start
                ctx.moveTo(495, 250 + (H / 2));
                ctx.lineTo(516, 250 + (H / 2));
                ctx.moveTo(516, 250 - (H / 2));
                ctx.lineTo(495, 250 - (H / 2));
                ctx.moveTo(516, 250 - (H / 2));
                ctx.lineTo(516 + 3 * Math.sqrt(2), 250 - (H / 2) + 3 * Math.sqrt(2));
                ctx.lineTo(516 + 3 * Math.sqrt(2), 250 + (H / 2) - 3 * Math.sqrt(2));
                ctx.lineTo(516, 250 + (H / 2));
                //non-changing H part end
                //non-changing J part start
                ctx.moveTo(516 + 3 * Math.sqrt(2) + J, 196);
                ctx.lineTo(516 + 3 * Math.sqrt(2) + J, 304);
                ctx.moveTo(516 + 3 * Math.sqrt(2), 196);
                ctx.lineTo(516 + 3 * Math.sqrt(2), 304);
                //non-changing J part end
                ctx.moveTo(516 + 3 * Math.sqrt(2) + J, 212.5);
                ctx.lineTo(522 + 3 * Math.sqrt(2) + J, 212.5);
                ctx.lineTo(522 + 3 * Math.sqrt(2) + J, 287.5);
                ctx.lineTo(516 + 3 * Math.sqrt(2) + J, 287.5);
                ctx.moveTo(522 + 3 * Math.sqrt(2) + J, 205);
                ctx.lineTo(522 + 3 * Math.sqrt(2) + J, 295);
                ctx.lineTo(558 + J, 295);
                ctx.lineTo(558 + J, 205);
                ctx.lineTo(522 + 3 * Math.sqrt(2) + J, 205);
                ctx.moveTo(558 + J, 205);
                ctx.lineTo(558 + 3 * Math.sqrt(2) + J, 205 + 3 * Math.sqrt(2));
                ctx.lineTo(558 + 3 * Math.sqrt(2) + J, 295 - 3 * Math.sqrt(2));
                ctx.lineTo(558 + J, 295);
                ctx.strokeStyle = '#000000';
                ctx.stroke();
                //element end
                
                //changing H part
                ctx.beginPath();
                ctx.setLineDash([0, 0, 0, 0]);
                ctx.lineWidth = "2";
                ctx.moveTo(495, 250 - (H / 2));
                ctx.lineTo(495, 250 + (H / 2));
                ctx.moveTo(516, 250 + (H / 2));
                ctx.lineTo(516, 250 - (H / 2));
                ctx.strokeStyle = '#000000';
                ctx.stroke();
                //changing H part end
                
                //changing J part
                ctx.beginPath();
                ctx.setLineDash([0, 0, 0, 0]);
                ctx.lineWidth = "2";
                ctx.moveTo(516 + 3 * Math.sqrt(2), 196);
                ctx.lineTo(516 + 3 * Math.sqrt(2) + J, 196);
                ctx.moveTo(516 + 3 * Math.sqrt(2), 304);
                ctx.lineTo(516 + 3 * Math.sqrt(2) + J, 304);
                ctx.strokeStyle = '#000000';
                ctx.stroke();
                //changing J part end
                
            }