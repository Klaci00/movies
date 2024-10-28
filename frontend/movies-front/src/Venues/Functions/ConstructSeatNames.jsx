const rowLengthDict = {
    'Kisterem': 8,
    'Közepes terem': 12,
    'Nagyterem': 15
}

export const ConstructSeatNames = (room_name, index) => {
    var row = Math.floor(index / rowLengthDict[room_name]) + 1;
    var seat = (index % rowLengthDict[room_name]) + 1
    return `${row}. sor, ${seat}. szék`
}