var scoringMatrix = {
    getScore: function(q, d){
     var matrix = [[1,-1,-1,-1], [-1,1,-1,-1], [-1,-1,1,-1], [-1,-1,-1,1]];
     var qNum, dNum;
       switch(q){
         case 'a' : qNum = 0; break;
         case 'c' : qNum = 1; break;
         case 'g' : qNum = 2; break;
         case 't' : qNum = 3; break;
         default: qNum = 0; break;
       }
       switch(d){
         case 'a' : dNum = 0; break;
         case 'c' : dNum = 1; break;
         case 'g' : dNum = 2; break;
         case 't' : dNum = 3; break;
         default: qNum = 0; break;
       }
       return matrix[qNum][dNum];
     }
   };