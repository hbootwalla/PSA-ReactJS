;(function(global){
    
        let LEFT = 1;
        let TOP = 2;
        let DIAG = 3;
        let ZERO = 0;
        var Cell = function(dir = 0, score = -1){
                this.Direction = dir;
                this.Score = score;
                this.Mark = 0;
        }
    
        var SmithWaterman = function(gap, query, database){
            return new SmithWaterman.init(gap, query, database);
        }
    
        
    
        SmithWaterman.prototype={
    
            // calculateMatrix: function(){

            //     for(var i = 1; i < this.query.length + 1; i++){
            //         var q = this.query[i-1];
            //         for(var j = 1; j < this.database.length + 1; j++){
            //             var d = this.database[j-1];
            //             var diagScore = this.matrix[i-1][j-1].Score + global.scoringMatrix.getScore(q,d);
            //             var topScore = this.matrix[i-1][j].Score + this.gap;
            //             var leftScore = this.matrix[i][j-1].Score + this.gap;
            //             if(diagScore > topScore)
            //             {
            //                 if(leftScore > diagScore){
            //                     this.matrix[i][j] = new Cell(LEFT, leftScore);
            //                 }
            //                 else{
            //                     this.matrix[i][j] = new Cell(DIAG, diagScore);
            //                 }
            //             }
            //             else{
            //                 if(leftScore > topScore){
            //                     this.matrix[i][j] = new Cell(LEFT, leftScore);
            //                 }else{
            //                     this.matrix[i][j] = new Cell(TOP, topScore);
            //                 }
            //             }
            //             if(this.matrix[i][j].Score > this.max){
            //                 this.max = this.matrix[i][j].Score;
            //                 this.maxI = i;
            //                 this.maxJ = j;
            //             }
            //         }
            //     }
            //     return this.matrix;
            // },
    
            calculateMatrix: function(){
                
                                for(var i = 1; i < this.query.length + 1; i++){
                                    var q = this.query[i-1];
                                    for(var j = 1; j < this.database.length + 1; j++){
                                        var d = this.database[j-1];
                                        var diagScore = this.matrix[i-1][j-1].Score + global.scoringMatrix.getScore(q,d);
                                        var topScore = this.matrix[i-1][j].Score + this.gap;
                                        var leftScore = this.matrix[i][j-1].Score + this.gap;
                                        var zero = 0;
                                        if(diagScore > topScore)
                                        {
                                            if(leftScore > diagScore){
                                                if(leftScore > 0)
                                                    this.matrix[i][j] = new Cell(LEFT, leftScore);
                                                else
                                                this.matrix[i][j] = new Cell(ZERO, 0);
                                            }
                                            else{
                                                if(diagScore > 0)
                                                    this.matrix[i][j] = new Cell(DIAG, diagScore);
                                                else 
                                                    this.matrix[i][j] = new Cell(ZERO, 0);
                                            }
                                        }
                                        else{
                                            if(leftScore > topScore){
                                                if(leftScore > 0)
                                                    this.matrix[i][j] = new Cell(LEFT, leftScore);
                                                else
                                                    this.matrix[i][j] = new Cell(ZERO, 0);
                                            }else{
                                                if(topScore > 0)
                                                    this.matrix[i][j] = new Cell(TOP, topScore);
                                                else
                                                    this.matrix[i][j] = new Cell(ZERO, 0);
                                            }
                                        }
                                        
                                        if(this.matrix[i][j].Score > this.max){
                                            this.max = this.matrix[i][j].Score;
                                            this.maxI = i;
                                            this.maxJ = j;
                                        }
                                    }
                                }
                                return this.matrix;
                            },

            getResult: function(){
                var i = this.maxI;
                var j = this.maxJ;
                var sTraceback = "";
                var tTraceback = "";
                this.matrix[i][j].Mark = 1;
                while(i>0 && j>0 && this.matrix[i][j] != 0){
                    var dir = this.matrix[i][j].Direction;
                    if(dir == DIAG){
                        sTraceback += this.query[i-1];
                        tTraceback += this.database[j-1];
                        i--;j--;
                    }
                    else if(dir == LEFT){
                        sTraceback += ' _ ';
                        tTraceback += this.database[j-1];
                        j--;
                    }
                    else if(dir == TOP){
                        sTraceback+= this.query[i-1];
                        tTraceback += ' _ ';
                        i--;
                    }
                    this.matrix[i][j].Mark = 1;
                }
                sTraceback = sTraceback.split("").reverse().join("");
                tTraceback = tTraceback.split("").reverse().join("");
                return {
                    query: sTraceback,
                    database: tTraceback
                };
            },
    
            print: function(){
                console.log(this.matrix);
            }
        }
    
        SmithWaterman.init = function(gap=0, query=' ', database=' '){
            this.gap = gap;
            this.query = query;
            this.database = database;
            this.matrix = [];
            this.matrix[0] = [];
            this.maxI = -1;
            this.maxJ = -1;
            this.max = -1;
            var score = 0;
            this.matrix[0][0] = new Cell(DIAG, score);
            for(var i = 1; i < this.query.length + 1; i++){
                this.matrix[i] = [];
                this.matrix[i].push(new Cell(LEFT, score));
            }
            for(var i = 1; i < this.database.length + 1; i++){
                this.matrix[0].push(new Cell(TOP, score));
            }
        };
    
        SmithWaterman.init.prototype = SmithWaterman.prototype; 
        
        global.SmithWaterman = SmithWaterman;
    
    })(window);