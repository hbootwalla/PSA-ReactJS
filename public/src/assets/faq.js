var faq = [
	["What is global alignment?",
	"Global alignment aligns every residue in every sequence. This alignment is most useful when the sequences in the query set are similar and of roughly equal size."],
    
    ["What is local alignment?",
	"Local alignments are useful for dissimilar sequences that might contain regions of similarity or similar sequence motifs within their larger sequence context."],
    
    ["What is a scoring system?",
	"The simplest scoring schemes give a value for each match, mismatch and indel. The step-by-step guide above uses match = 1, mismatch = −1, indel = −1. Thus, the lower the alignment score the larger the edit distance, for this scoring system one wants a high score."],
    
    ["What is a gap penalty?",
	"Gap penalty designates scores for insertion or deletion. A simple gap penalty strategy is to use fixed score for each gap. "],
    
    ["What is a scoring matrix?",
	"The function of the scoring matrix is to execute one-to-one comparisons between all components in two sequences and record the optimal alignment results using dynamic programming. The final optimal alignment is found by iteratively expanding the growing optimal alignment."],
    
    ["What is the complexity of Needleman-Wunsch, Smith-Waterman and Dovetail alignment algorithms?",
	"All the above algorithms can be implemented in time O(mn) and in space O(m + n) where m and n are the two sequences."],
    
    ["In which sequence alignment method do we set values for first row and column?",
    "We initialize the values for first row and column in Needleman-Wunsch algorithm"],
    
    ["Explain the traceback for Smith-Waterman algorithm",
    "The trace back begins from the position which has the highest value, pointing back with the pointers, thus finding out the predecessors, then move to next predecessor and continue until we reach the score 0."],

    ["Is it possible to find two pointers pointing out from one cell?",
    "The above case is possible. Here, both the alignments can be considered. The best one is found by scoring and finding the maximum score among them."],
    
    ["Why is the score for Smith Waterman algorithm always above Dovetail score?",
    "This is because the max of dovetail is calculated by taking into consideration only the last row and column"],
        
    ["Why is Needleman alignment faster than Waterman alignment?",
    "This is because, the later one needs to calculate a max value which is found from traversing the whole matrix."],
];