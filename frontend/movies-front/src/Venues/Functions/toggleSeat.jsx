export const toggleSeat = (seat, setSeat, seatNum, setSeatNum) => {
  if (seatNum>0){
  if (seat !== 2) {
    setSeat(prevSeat => {
      const newSeat = prevSeat === 0 ? 1 : 0;
      if (newSeat === 1) {
        setSeatNum(seatNum - 1);
      } else {
        setSeatNum(seatNum + 1);
      }
      
          return newSeat;
          
        
      
    });
  }}
  else{
    if (seat !== 2 && seat==1) {
      setSeat(prevSeat => {
        const newSeat = prevSeat === 1 ? 0 : 0;
        if (newSeat === 1) {
          setSeatNum(seatNum - 1);
        } else {
          setSeatNum(seatNum + 1);
        }
        return newSeat;
      });
    }
  }
};
