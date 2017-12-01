;(function(global){
    
        let LEFT = 1;
        let TOP = 2;
        let DIAG = 3;
    
        var Cell = function(dir = 0, score = -1){
                this.Direction = dir;
                this.Score = score;
                this.Mark = 0;
        }
    
        var NeedlemanWunsch = function(gap, query, database){
            return new NeedlemanWunsch.init(gap, query, database);
        }
    
        
    
        NeedlemanWunsch.prototype={
    
            calculateMatrix: function(){
                for(var i = 1; i < this.query.length + 1; i++){
                    var q = this.query[i-1];
                    for(var j = 1; j < this.database.length + 1; j++){
                        var d = this.database[j-1];
                        var diagScore = this.matrix[i-1][j-1].Score + global.scoringMatrix.getScore(q,d);
                        var topScore = this.matrix[i-1][j].Score + this.gap;
                        var leftScore = this.matrix[i][j-1].Score + this.gap;
                        if(diagScore > topScore)
                        {
                            if(leftScore > diagScore){
                                this.matrix[i][j] = new Cell(LEFT, leftScore);
                            }
                            else{
                                this.matrix[i][j] = new Cell(DIAG, diagScore);
                            }
                        }
                        else{
                            if(leftScore > topScore){
                                this.matrix[i][j] = new Cell(LEFT, leftScore);
                            }else{
                                this.matrix[i][j] = new Cell(TOP, topScore);
                            }
                        }
                    }
                }
                return this.matrix;
            },
    
            getResult: function(){
                var i = this.query.length;
                var j = this.database.length;
                this.matrix[i][j].Mark = 1;
                var sTraceback = "";
                var tTraceback = "";
                while(i>0 && j>0){
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
                while(i>0){
                    tTraceback += ' _ ';
                    sTraceback += this.query[i-1];
                    i--;
                    this.matrix[i][j].Mark = 1;
                }
                while(j>0){
                    sTraceback += ' _ ';
                    tTraceback += this.database[j-1];
                    j--;
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
    
        NeedlemanWunsch.init = function(gap=0, query=' ', database=' '){
            this.gap = gap;
            this.query = query;
            this.database = database;
            this.matrix = [];
            this.matrix[0] = [];
            var score = 0;
            this.matrix[0][0] = new Cell(DIAG, score);
            for(var i = 1; i < this.query.length + 1; i++){
                score += this.gap;
                this.matrix[i] = [];
                this.matrix[i].push(new Cell(LEFT, score));
            }
            score = 0;
            for(var i = 1; i < this.database.length + 1; i++){
                score += this.gap;
                this.matrix[0].push(new Cell(TOP, score));
            }
        };
    
        NeedlemanWunsch.init.prototype = NeedlemanWunsch.prototype; 
        
        global.NeedlemanWunsch = NeedlemanWunsch;
    
    })(window);