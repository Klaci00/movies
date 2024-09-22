testList=['seat_a','seat_b','seat_c','seat_d']
seatList=['seat_001', 'seat_002', 'seat_003', 'seat_004', 'seat_005', 'seat_006', 'seat_007', 'seat_008', 'seat_009', 'seat_010', 'seat_011', 'seat_012', 'seat_013', 'seat_014', 'seat_015', 'seat_016', 'seat_017', 'seat_018', 'seat_019', 'seat_020', 'seat_021', 'seat_022', 'seat_023', 'seat_024', 'seat_025', 'seat_026', 'seat_027', 'seat_028', 'seat_029', 'seat_030', 'seat_031', 'seat_032', 'seat_033', 'seat_034', 'seat_035', 'seat_036', 'seat_037', 'seat_038', 'seat_039', 'seat_040', 'seat_041', 'seat_042', 'seat_043', 'seat_044', 'seat_045', 'seat_046', 'seat_047', 'seat_048', 'seat_049', 'seat_050', 'seat_051', 'seat_052', 'seat_053', 'seat_054', 'seat_055', 'seat_056', 'seat_057', 'seat_058', 'seat_059', 'seat_060', 'seat_061', 'seat_062', 'seat_063', 'seat_064', 'seat_065', 'seat_066', 'seat_067', 'seat_068', 'seat_069', 'seat_070', 'seat_071', 'seat_072', 'seat_073', 'seat_074', 'seat_075', 'seat_076', 'seat_077', 'seat_078', 'seat_079', 'seat_080', 'seat_081', 'seat_082', 'seat_083', 'seat_084', 'seat_085', 'seat_086', 'seat_087', 'seat_088', 'seat_089', 'seat_090', 'seat_091', 'seat_092', 'seat_093', 'seat_094', 'seat_095', 'seat_096', 'seat_097', 'seat_098', 'seat_099', 'seat_100', 'seat_101', 'seat_102', 'seat_103', 'seat_104', 'seat_105', 'seat_106', 'seat_107', 'seat_108', 'seat_109', 'seat_110', 'seat_111', 'seat_112', 'seat_113', 'seat_114', 'seat_115', 'seat_116', 'seat_117', 'seat_118', 'seat_119', 'seat_120', 'seat_121', 'seat_122', 'seat_123', 'seat_124', 'seat_125', 'seat_126', 'seat_127', 'seat_128', 'seat_129', 'seat_130', 'seat_131', 'seat_132', 'seat_133', 'seat_134', 'seat_135', 'seat_136', 'seat_137', 'seat_138', 'seat_139', 'seat_140', 'seat_141', 'seat_142', 'seat_143', 'seat_144', 'seat_145', 'seat_146', 'seat_147', 'seat_148', 'seat_149', 'seat_150', 'seat_151', 'seat_152', 'seat_153', 'seat_154', 'seat_155', 'seat_156', 'seat_157', 'seat_158', 'seat_159', 'seat_160', 'seat_161', 'seat_162', 'seat_163', 'seat_164', 'seat_165', 'seat_166', 'seat_167', 'seat_168', 'seat_169', 'seat_170', 'seat_171', 'seat_172', 'seat_173', 'seat_174', 'seat_175', 'seat_176', 'seat_177', 'seat_178', 'seat_179', 'seat_180']
def reservDataTEST(user,data):
    reservData={
        'owner': user,
        'title': data['title'],
        'room_name': data['room_name'],
        'showtime': data['showtime'],
    }
    for i in testList:
        reservData.update({i : data[i]})
    reservData.update({'seat_count': data['seat_count'],})
    return reservData

def venueDataUpdaterTEST(data):
    for i in testList:
        if i in data and data[i] == 1:
            data[i]=2
    return data

def seatLiberatorTEST(instance,venue):
    for i in testList:
        if getattr(instance, i) == 1:
            setattr(venue, i, 0)
    return venue
def venue_dataTEST(venue):
    venueData={
        'id': venue.id,
        'room_name': venue.room_name,
        'showtime': venue.showtime,
    }
    for i in testList:
        venueData.update({i : getattr(venue, i),})
    return venueData

def seatMaker():
    seatList=[]
    for i in range(1,181):
        if i<10: seatList.append(f'seat_00{i}')
        elif i<100: seatList.append(f'seat_0{i}')
        else: seatList.append(f'seat_{i}')
    return seatList

def reservData(user,data):
   return{
            'owner': user,
            'title': data['title'],
            'room_name': data['room_name'],
            'showtime': data['showtime'],
            'seat_a': data['seat_a'],
            'seat_b': data['seat_b'],
            'seat_c': data['seat_c'],
            'seat_d': data['seat_d'],
            'seat_count': data['seat_count'],
        }
def reservData3(user,data):
    reservData={
        'owner': user,
        'title': data['title'],
        'room_name': data['room_name'],
        'showtime': data['showtime'],
    }
    for i in seatList:
        reservData.update({i : data[i]})
    reservData.update({'seat_count': data['seat_count'],})
    return reservData
def venueDataUpdater3(data):
    for i in seatList:
        if i in data and data[i]==1:
            data[i]=2
    return data

def seatLiberator3(instance,venue):
    for i in seatList:
        if getattr(instance, i) == 1:
            setattr(venue, i, 0)
    return venue 

def venue_data3(venue):
    venueData={
        'id': venue.id,
        'room_name': venue.room_name,
        'showtime': venue.showtime,
    }
    for i in seatList:
        venueData.update({i : getattr(venue, i),})
    return venueData

def venueDataUpdater(data):
        if 'seat_a' in data and data['seat_a'] == 1:
            data['seat_a'] = 2

        if 'seat_b' in data and data['seat_b'] == 1:
            data['seat_b'] = 2

        if 'seat_c' in data and data['seat_c'] == 1:
            data['seat_c'] = 2
            
        if 'seat_d' in data and data['seat_d'] == 1:
            data['seat_d'] = 2
        
        return data

def seatLiberator(instance,venue):
    if instance.seat_a==1: venue.seat_a=0
    if instance.seat_b==1: venue.seat_b=0
    if instance.seat_c==1: venue.seat_c=0
    if instance.seat_d==1: venue.seat_d=0
    return venue

def venue_data(venue):
    return {
        'id': venue.id,
        'room_name': venue.room_name,
        'showtime': venue.showtime,
        'seat_a': venue.seat_a,
        'seat_b': venue.seat_b,
        'seat_c': venue.seat_c,
        'seat_d': venue.seat_d
    }
def venue_data2(venue):
    return {
        'id': venue.id,
        'room_name': venue.room_name,
        'showtime': venue.showtime,
        'seat_001': venue.seat_001,
        'seat_002': venue.seat_002,
        'seat_003': venue.seat_003,
        'seat_004': venue.seat_004,
        'seat_005': venue.seat_005,
        'seat_006': venue.seat_006,
        'seat_007': venue.seat_007,
        'seat_008': venue.seat_008,
        'seat_009': venue.seat_009,
        'seat_010': venue.seat_010,
        'seat_011': venue.seat_011,
        'seat_012': venue.seat_012,
        'seat_013': venue.seat_013,
        'seat_014': venue.seat_014,
        'seat_015': venue.seat_015,
        'seat_016': venue.seat_016,
        'seat_017': venue.seat_017,
        'seat_018': venue.seat_018,
        'seat_019': venue.seat_019,
        'seat_020': venue.seat_020,
        'seat_021': venue.seat_021,
        'seat_022': venue.seat_022,
        'seat_023': venue.seat_023,
        'seat_024': venue.seat_024,
        'seat_025': venue.seat_025,
        'seat_026': venue.seat_026,
        'seat_027': venue.seat_027,
        'seat_028': venue.seat_028,
        'seat_029': venue.seat_029,
        'seat_030': venue.seat_030,
        'seat_031': venue.seat_031,
        'seat_032': venue.seat_032,
        'seat_033': venue.seat_033,
        'seat_034': venue.seat_034,
        'seat_035': venue.seat_035,
        'seat_036': venue.seat_036,
        'seat_037': venue.seat_037,
        'seat_038': venue.seat_038,
        'seat_039': venue.seat_039,
        'seat_040': venue.seat_040,
        'seat_041': venue.seat_041,
        'seat_042': venue.seat_042,
        'seat_043': venue.seat_043,
        'seat_044': venue.seat_044,
        'seat_045': venue.seat_045,
        'seat_046': venue.seat_046,
        'seat_047': venue.seat_047,
        'seat_048': venue.seat_048,
        'seat_049': venue.seat_049,
        'seat_050': venue.seat_050,
        'seat_051': venue.seat_051,
        'seat_052': venue.seat_052,
        'seat_053': venue.seat_053,
        'seat_054': venue.seat_054,
        'seat_055': venue.seat_055,
        'seat_056': venue.seat_056,
        'seat_057': venue.seat_057,
        'seat_058': venue.seat_058,
        'seat_059': venue.seat_059,
        'seat_060': venue.seat_060,
        'seat_061': venue.seat_061,
        'seat_062': venue.seat_062,
        'seat_063': venue.seat_063,
        'seat_064': venue.seat_064,
        'seat_065': venue.seat_065,
        'seat_066': venue.seat_066,
        'seat_067': venue.seat_067,
        'seat_068': venue.seat_068,
        'seat_069': venue.seat_069,
        'seat_070': venue.seat_070,
        'seat_071': venue.seat_071,
        'seat_072': venue.seat_072,
        'seat_073': venue.seat_073,
        'seat_074': venue.seat_074,
        'seat_075': venue.seat_075,
        'seat_076': venue.seat_076,
        'seat_077': venue.seat_077,
        'seat_078': venue.seat_078,
        'seat_079': venue.seat_079,
        'seat_080': venue.seat_080,
        'seat_081': venue.seat_081,
        'seat_082': venue.seat_082,
        'seat_083': venue.seat_083,
        'seat_084': venue.seat_084,
        'seat_085': venue.seat_085,
        'seat_086': venue.seat_086,
        'seat_087': venue.seat_087,
        'seat_088': venue.seat_088,
        'seat_089': venue.seat_089,
        'seat_090': venue.seat_090,
        'seat_091': venue.seat_091,
        'seat_092': venue.seat_092,
        'seat_093': venue.seat_093,
        'seat_094': venue.seat_094,
        'seat_095': venue.seat_095,
        'seat_096': venue.seat_096,
        'seat_097': venue.seat_097,
        'seat_098': venue.seat_098,
        'seat_099': venue.seat_099,
        'seat_100': venue.seat_100,
        'seat_101': venue.seat_101,
        'seat_102': venue.seat_102,
        'seat_103': venue.seat_103,
        'seat_104': venue.seat_104,
        'seat_105': venue.seat_105,
        'seat_106': venue.seat_106,
        'seat_107': venue.seat_107,
        'seat_108': venue.seat_108,
        'seat_109': venue.seat_109,
        'seat_110': venue.seat_110,
        'seat_111': venue.seat_111,
        'seat_112': venue.seat_112,
        'seat_113': venue.seat_113,
        'seat_114': venue.seat_114,
        'seat_115': venue.seat_115,
        'seat_116': venue.seat_116,
        'seat_117': venue.seat_117,
        'seat_118': venue.seat_118,
        'seat_119': venue.seat_119,
        'seat_120': venue.seat_120,
        'seat_121': venue.seat_121,
        'seat_122': venue.seat_122,
        'seat_123': venue.seat_123,
        'seat_124': venue.seat_124,
        'seat_125': venue.seat_125,
        'seat_126': venue.seat_126,
        'seat_127': venue.seat_127,
        'seat_128': venue.seat_128,
        'seat_129': venue.seat_129,
        'seat_130': venue.seat_130,
        'seat_131': venue.seat_131,
        'seat_132': venue.seat_132,
        'seat_133': venue.seat_133,
        'seat_134': venue.seat_134,
        'seat_135': venue.seat_135,
        'seat_136': venue.seat_136,
        'seat_137': venue.seat_137,
        'seat_138': venue.seat_138,
        'seat_139': venue.seat_139,
        'seat_140': venue.seat_140,
        'seat_141': venue.seat_141,
        'seat_142': venue.seat_142,
        'seat_143': venue.seat_143,
        'seat_144': venue.seat_144,
        'seat_145': venue.seat_145,
        'seat_146': venue.seat_146,
        'seat_147': venue.seat_147,
        'seat_148': venue.seat_148,
        'seat_149': venue.seat_149,
        'seat_150': venue.seat_150,
        'seat_151': venue.seat_151,
        'seat_152': venue.seat_152,
        'seat_153': venue.seat_153,
        'seat_154': venue.seat_154,
        'seat_155': venue.seat_155,
        'seat_156': venue.seat_156,
        'seat_157': venue.seat_157,
        'seat_158': venue.seat_158,
        'seat_159': venue.seat_159,
        'seat_160': venue.seat_160,
        'seat_161': venue.seat_161,
        'seat_162': venue.seat_162,
        'seat_163': venue.seat_163,
        'seat_164': venue.seat_164,
        'seat_165': venue.seat_165,
        'seat_166': venue.seat_166,
        'seat_167': venue.seat_167,
        'seat_168': venue.seat_168,
        'seat_169': venue.seat_169,
        'seat_170': venue.seat_170,
        'seat_171': venue.seat_171,
        'seat_172': venue.seat_172,
        'seat_173': venue.seat_173,
        'seat_174': venue.seat_174,
        'seat_175': venue.seat_175,
        'seat_176': venue.seat_176,
        'seat_177': venue.seat_177,
        'seat_178': venue.seat_178,
        'seat_179': venue.seat_179,
        'seat_180': venue.seat_180
    }
def seatLiberator2(instance,venue):
    if instance.seat_001 == 1: venue.seat_001 = 0
    if instance.seat_002 == 1: venue.seat_002 = 0
    if instance.seat_003 == 1: venue.seat_003 = 0
    if instance.seat_004 == 1: venue.seat_004 = 0
    if instance.seat_005 == 1: venue.seat_005 = 0
    if instance.seat_006 == 1: venue.seat_006 = 0
    if instance.seat_007 == 1: venue.seat_007 = 0
    if instance.seat_008 == 1: venue.seat_008 = 0
    if instance.seat_009 == 1: venue.seat_009 = 0
    if instance.seat_010 == 1: venue.seat_010 = 0
    if instance.seat_011 == 1: venue.seat_011 = 0
    if instance.seat_012 == 1: venue.seat_012 = 0
    if instance.seat_013 == 1: venue.seat_013 = 0
    if instance.seat_014 == 1: venue.seat_014 = 0
    if instance.seat_015 == 1: venue.seat_015 = 0
    if instance.seat_016 == 1: venue.seat_016 = 0
    if instance.seat_017 == 1: venue.seat_017 = 0
    if instance.seat_018 == 1: venue.seat_018 = 0
    if instance.seat_019 == 1: venue.seat_019 = 0
    if instance.seat_020 == 1: venue.seat_020 = 0
    if instance.seat_021 == 1: venue.seat_021 = 0
    if instance.seat_022 == 1: venue.seat_022 = 0
    if instance.seat_023 == 1: venue.seat_023 = 0
    if instance.seat_024 == 1: venue.seat_024 = 0
    if instance.seat_025 == 1: venue.seat_025 = 0
    if instance.seat_026 == 1: venue.seat_026 = 0
    if instance.seat_027 == 1: venue.seat_027 = 0
    if instance.seat_028 == 1: venue.seat_028 = 0
    if instance.seat_029 == 1: venue.seat_029 = 0
    if instance.seat_030 == 1: venue.seat_030 = 0
    if instance.seat_031 == 1: venue.seat_031 = 0
    if instance.seat_032 == 1: venue.seat_032 = 0
    if instance.seat_033 == 1: venue.seat_033 = 0
    if instance.seat_034 == 1: venue.seat_034 = 0
    if instance.seat_035 == 1: venue.seat_035 = 0
    if instance.seat_036 == 1: venue.seat_036 = 0
    if instance.seat_037 == 1: venue.seat_037 = 0
    if instance.seat_038 == 1: venue.seat_038 = 0
    if instance.seat_039 == 1: venue.seat_039 = 0
    if instance.seat_040 == 1: venue.seat_040 = 0
    if instance.seat_041 == 1: venue.seat_041 = 0
    if instance.seat_042 == 1: venue.seat_042 = 0
    if instance.seat_043 == 1: venue.seat_043 = 0
    if instance.seat_044 == 1: venue.seat_044 = 0
    if instance.seat_045 == 1: venue.seat_045 = 0
    if instance.seat_046 == 1: venue.seat_046 = 0
    if instance.seat_047 == 1: venue.seat_047 = 0
    if instance.seat_048 == 1: venue.seat_048 = 0
    if instance.seat_049 == 1: venue.seat_049 = 0
    if instance.seat_050 == 1: venue.seat_050 = 0
    if instance.seat_051 == 1: venue.seat_051 = 0
    if instance.seat_052 == 1: venue.seat_052 = 0
    if instance.seat_053 == 1: venue.seat_053 = 0
    if instance.seat_054 == 1: venue.seat_054 = 0
    if instance.seat_055 == 1: venue.seat_055 = 0
    if instance.seat_056 == 1: venue.seat_056 = 0
    if instance.seat_057 == 1: venue.seat_057 = 0
    if instance.seat_058 == 1: venue.seat_058 = 0
    if instance.seat_059 == 1: venue.seat_059 = 0
    if instance.seat_060 == 1: venue.seat_060 = 0
    if instance.seat_061 == 1: venue.seat_061 = 0
    if instance.seat_062 == 1: venue.seat_062 = 0
    if instance.seat_063 == 1: venue.seat_063 = 0
    if instance.seat_064 == 1: venue.seat_064 = 0
    if instance.seat_065 == 1: venue.seat_065 = 0
    if instance.seat_066 == 1: venue.seat_066 = 0
    if instance.seat_067 == 1: venue.seat_067 = 0
    if instance.seat_068 == 1: venue.seat_068 = 0
    if instance.seat_069 == 1: venue.seat_069 = 0
    if instance.seat_070 == 1: venue.seat_070 = 0
    if instance.seat_071 == 1: venue.seat_071 = 0
    if instance.seat_072 == 1: venue.seat_072 = 0
    if instance.seat_073 == 1: venue.seat_073 = 0
    if instance.seat_074 == 1: venue.seat_074 = 0
    if instance.seat_075 == 1: venue.seat_075 = 0
    if instance.seat_076 == 1: venue.seat_076 = 0
    if instance.seat_077 == 1: venue.seat_077 = 0
    if instance.seat_078 == 1: venue.seat_078 = 0
    if instance.seat_079 == 1: venue.seat_079 = 0
    if instance.seat_080 == 1: venue.seat_080 = 0
    if instance.seat_081 == 1: venue.seat_081 = 0
    if instance.seat_082 == 1: venue.seat_082 = 0
    if instance.seat_083 == 1: venue.seat_083 = 0
    if instance.seat_084 == 1: venue.seat_084 = 0
    if instance.seat_085 == 1: venue.seat_085 = 0
    if instance.seat_086 == 1: venue.seat_086 = 0
    if instance.seat_087 == 1: venue.seat_087 = 0
    if instance.seat_088 == 1: venue.seat_088 = 0
    if instance.seat_089 == 1: venue.seat_089 = 0
    if instance.seat_090 == 1: venue.seat_090 = 0
    if instance.seat_091 == 1: venue.seat_091 = 0
    if instance.seat_092 == 1: venue.seat_092 = 0
    if instance.seat_093 == 1: venue.seat_093 = 0
    if instance.seat_094 == 1: venue.seat_094 = 0
    if instance.seat_095 == 1: venue.seat_095 = 0
    if instance.seat_096 == 1: venue.seat_096 = 0
    if instance.seat_097 == 1: venue.seat_097 = 0
    if instance.seat_098 == 1: venue.seat_098 = 0
    if instance.seat_099 == 1: venue.seat_099 = 0
    if instance.seat_100 == 1: venue.seat_100 = 0
    if instance.seat_101 == 1: venue.seat_101 = 0
    if instance.seat_102 == 1: venue.seat_102 = 0
    if instance.seat_103 == 1: venue.seat_103 = 0
    if instance.seat_104 == 1: venue.seat_104 = 0
    if instance.seat_105 == 1: venue.seat_105 = 0
    if instance.seat_106 == 1: venue.seat_106 = 0
    if instance.seat_107 == 1: venue.seat_107 = 0
    if instance.seat_108 == 1: venue.seat_108 = 0
    if instance.seat_109 == 1: venue.seat_109 = 0
    if instance.seat_110 == 1: venue.seat_110 = 0
    if instance.seat_111 == 1: venue.seat_111 = 0
    if instance.seat_112 == 1: venue.seat_112 = 0
    if instance.seat_113 == 1: venue.seat_113 = 0
    if instance.seat_114 == 1: venue.seat_114 = 0
    if instance.seat_115 == 1: venue.seat_115 = 0
    if instance.seat_116 == 1: venue.seat_116 = 0
    if instance.seat_117 == 1: venue.seat_117 = 0
    if instance.seat_118 == 1: venue.seat_118 = 0
    if instance.seat_119 == 1: venue.seat_119 = 0
    if instance.seat_120 == 1: venue.seat_120 = 0
    if instance.seat_121 == 1: venue.seat_121 = 0
    if instance.seat_122 == 1: venue.seat_122 = 0
    if instance.seat_123 == 1: venue.seat_123 = 0
    if instance.seat_124 == 1: venue.seat_124 = 0
    if instance.seat_125 == 1: venue.seat_125 = 0
    if instance.seat_126 == 1: venue.seat_126 = 0
    if instance.seat_127 == 1: venue.seat_127 = 0
    if instance.seat_128 == 1: venue.seat_128 = 0
    if instance.seat_129 == 1: venue.seat_129 = 0
    if instance.seat_130 == 1: venue.seat_130 = 0
    if instance.seat_131 == 1: venue.seat_131 = 0
    if instance.seat_132 == 1: venue.seat_132 = 0
    if instance.seat_133 == 1: venue.seat_133 = 0
    if instance.seat_134 == 1: venue.seat_134 = 0
    if instance.seat_135 == 1: venue.seat_135 = 0
    if instance.seat_136 == 1: venue.seat_136 = 0
    if instance.seat_137 == 1: venue.seat_137 = 0
    if instance.seat_138 == 1: venue.seat_138 = 0
    if instance.seat_139 == 1: venue.seat_139 = 0
    if instance.seat_140 == 1: venue.seat_140 = 0
    if instance.seat_141 == 1: venue.seat_141 = 0
    if instance.seat_142 == 1: venue.seat_142 = 0
    if instance.seat_143 == 1: venue.seat_143 = 0
    if instance.seat_144 == 1: venue.seat_144 = 0
    if instance.seat_145 == 1: venue.seat_145 = 0
    if instance.seat_146 == 1: venue.seat_146 = 0
    if instance.seat_147 == 1: venue.seat_147 = 0
    if instance.seat_148 == 1: venue.seat_148 = 0
    if instance.seat_149 == 1: venue.seat_149 = 0
    if instance.seat_150 == 1: venue.seat_150 = 0
    if instance.seat_151 == 1: venue.seat_151 = 0
    if instance.seat_152 == 1: venue.seat_152 = 0
    if instance.seat_153 == 1: venue.seat_153 = 0
    if instance.seat_154 == 1: venue.seat_154 = 0
    if instance.seat_155 == 1: venue.seat_155 = 0
    if instance.seat_156 == 1: venue.seat_156 = 0
    if instance.seat_157 == 1: venue.seat_157 = 0
    if instance.seat_158 == 1: venue.seat_158 = 0
    if instance.seat_159 == 1: venue.seat_159 = 0
    if instance.seat_160 == 1: venue.seat_160 = 0
    if instance.seat_161 == 1: venue.seat_161 = 0
    if instance.seat_162 == 1: venue.seat_162 = 0
    if instance.seat_163 == 1: venue.seat_163 = 0
    if instance.seat_164 == 1: venue.seat_164 = 0
    if instance.seat_165 == 1: venue.seat_165 = 0
    if instance.seat_166 == 1: venue.seat_166 = 0
    if instance.seat_167 == 1: venue.seat_167 = 0
    if instance.seat_168 == 1: venue.seat_168 = 0
    if instance.seat_169 == 1: venue.seat_169 = 0
    if instance.seat_170 == 1: venue.seat_170 = 0
    if instance.seat_171 == 1: venue.seat_171 = 0
    if instance.seat_172 == 1: venue.seat_172 = 0
    if instance.seat_173 == 1: venue.seat_173 = 0
    if instance.seat_174 == 1: venue.seat_174 = 0
    if instance.seat_175 == 1: venue.seat_175 = 0
    if instance.seat_176 == 1: venue.seat_176 = 0
    if instance.seat_177 == 1: venue.seat_177 = 0
    if instance.seat_178 == 1: venue.seat_178 = 0
    if instance.seat_179 == 1: venue.seat_179 = 0
    if instance.seat_180 == 1: venue.seat_180 = 0
    return venue

def venueDataUpdater2(data):
    if 'seat_001' in data and data['seat_001'] == 1: data['seat_001'] = 2
    if 'seat_002' in data and data['seat_002'] == 1: data['seat_002'] = 2
    if 'seat_003' in data and data['seat_003'] == 1: data['seat_003'] = 2
    if 'seat_004' in data and data['seat_004'] == 1: data['seat_004'] = 2
    if 'seat_005' in data and data['seat_005'] == 1: data['seat_005'] = 2
    if 'seat_006' in data and data['seat_006'] == 1: data['seat_006'] = 2
    if 'seat_007' in data and data['seat_007'] == 1: data['seat_007'] = 2
    if 'seat_008' in data and data['seat_008'] == 1: data['seat_008'] = 2
    if 'seat_009' in data and data['seat_009'] == 1: data['seat_009'] = 2
    if 'seat_010' in data and data['seat_010'] == 1: data['seat_010'] = 2
    if 'seat_011' in data and data['seat_011'] == 1: data['seat_011'] = 2
    if 'seat_012' in data and data['seat_012'] == 1: data['seat_012'] = 2
    if 'seat_013' in data and data['seat_013'] == 1: data['seat_013'] = 2
    if 'seat_014' in data and data['seat_014'] == 1: data['seat_014'] = 2
    if 'seat_015' in data and data['seat_015'] == 1: data['seat_015'] = 2
    if 'seat_016' in data and data['seat_016'] == 1: data['seat_016'] = 2
    if 'seat_017' in data and data['seat_017'] == 1: data['seat_017'] = 2
    if 'seat_018' in data and data['seat_018'] == 1: data['seat_018'] = 2
    if 'seat_019' in data and data['seat_019'] == 1: data['seat_019'] = 2
    if 'seat_020' in data and data['seat_020'] == 1: data['seat_020'] = 2
    if 'seat_021' in data and data['seat_021'] == 1: data['seat_021'] = 2
    if 'seat_022' in data and data['seat_022'] == 1: data['seat_022'] = 2
    if 'seat_023' in data and data['seat_023'] == 1: data['seat_023'] = 2
    if 'seat_024' in data and data['seat_024'] == 1: data['seat_024'] = 2
    if 'seat_025' in data and data['seat_025'] == 1: data['seat_025'] = 2
    if 'seat_026' in data and data['seat_026'] == 1: data['seat_026'] = 2
    if 'seat_027' in data and data['seat_027'] == 1: data['seat_027'] = 2
    if 'seat_028' in data and data['seat_028'] == 1: data['seat_028'] = 2
    if 'seat_029' in data and data['seat_029'] == 1: data['seat_029'] = 2
    if 'seat_030' in data and data['seat_030'] == 1: data['seat_030'] = 2
    if 'seat_031' in data and data['seat_031'] == 1: data['seat_031'] = 2
    if 'seat_032' in data and data['seat_032'] == 1: data['seat_032'] = 2
    if 'seat_033' in data and data['seat_033'] == 1: data['seat_033'] = 2
    if 'seat_034' in data and data['seat_034'] == 1: data['seat_034'] = 2
    if 'seat_035' in data and data['seat_035'] == 1: data['seat_035'] = 2
    if 'seat_036' in data and data['seat_036'] == 1: data['seat_036'] = 2
    if 'seat_037' in data and data['seat_037'] == 1: data['seat_037'] = 2
    if 'seat_038' in data and data['seat_038'] == 1: data['seat_038'] = 2
    if 'seat_039' in data and data['seat_039'] == 1: data['seat_039'] = 2
    if 'seat_040' in data and data['seat_040'] == 1: data['seat_040'] = 2
    if 'seat_041' in data and data['seat_041'] == 1: data['seat_041'] = 2
    if 'seat_042' in data and data['seat_042'] == 1: data['seat_042'] = 2
    if 'seat_043' in data and data['seat_043'] == 1: data['seat_043'] = 2
    if 'seat_044' in data and data['seat_044'] == 1: data['seat_044'] = 2
    if 'seat_045' in data and data['seat_045'] == 1: data['seat_045'] = 2
    if 'seat_046' in data and data['seat_046'] == 1: data['seat_046'] = 2
    if 'seat_047' in data and data['seat_047'] == 1: data['seat_047'] = 2
    if 'seat_048' in data and data['seat_048'] == 1: data['seat_048'] = 2
    if 'seat_049' in data and data['seat_049'] == 1: data['seat_049'] = 2
    if 'seat_050' in data and data['seat_050'] == 1: data['seat_050'] = 2
    if 'seat_051' in data and data['seat_051'] == 1: data['seat_051'] = 2
    if 'seat_052' in data and data['seat_052'] == 1: data['seat_052'] = 2
    if 'seat_053' in data and data['seat_053'] == 1: data['seat_053'] = 2
    if 'seat_054' in data and data['seat_054'] == 1: data['seat_054'] = 2
    if 'seat_055' in data and data['seat_055'] == 1: data['seat_055'] = 2
    if 'seat_056' in data and data['seat_056'] == 1: data['seat_056'] = 2
    if 'seat_057' in data and data['seat_057'] == 1: data['seat_057'] = 2
    if 'seat_058' in data and data['seat_058'] == 1: data['seat_058'] = 2
    if 'seat_059' in data and data['seat_059'] == 1: data['seat_059'] = 2
    if 'seat_060' in data and data['seat_060'] == 1: data['seat_060'] = 2
    if 'seat_061' in data and data['seat_061'] == 1: data['seat_061'] = 2
    if 'seat_062' in data and data['seat_062'] == 1: data['seat_062'] = 2
    if 'seat_063' in data and data['seat_063'] == 1: data['seat_063'] = 2
    if 'seat_064' in data and data['seat_064'] == 1: data['seat_064'] = 2
    if 'seat_065' in data and data['seat_065'] == 1: data['seat_065'] = 2
    if 'seat_066' in data and data['seat_066'] == 1: data['seat_066'] = 2
    if 'seat_067' in data and data['seat_067'] == 1: data['seat_067'] = 2
    if 'seat_068' in data and data['seat_068'] == 1: data['seat_068'] = 2
    if 'seat_069' in data and data['seat_069'] == 1: data['seat_069'] = 2
    if 'seat_070' in data and data['seat_070'] == 1: data['seat_070'] = 2
    if 'seat_071' in data and data['seat_071'] == 1: data['seat_071'] = 2
    if 'seat_072' in data and data['seat_072'] == 1: data['seat_072'] = 2
    if 'seat_073' in data and data['seat_073'] == 1: data['seat_073'] = 2
    if 'seat_074' in data and data['seat_074'] == 1: data['seat_074'] = 2
    if 'seat_075' in data and data['seat_075'] == 1: data['seat_075'] = 2
    if 'seat_076' in data and data['seat_076'] == 1: data['seat_076'] = 2
    if 'seat_077' in data and data['seat_077'] == 1: data['seat_077'] = 2
    if 'seat_078' in data and data['seat_078'] == 1: data['seat_078'] = 2
    if 'seat_079' in data and data['seat_079'] == 1: data['seat_079'] = 2
    if 'seat_080' in data and data['seat_080'] == 1: data['seat_080'] = 2
    if 'seat_081' in data and data['seat_081'] == 1: data['seat_081'] = 2
    if 'seat_082' in data and data['seat_082'] == 1: data['seat_082'] = 2
    if 'seat_083' in data and data['seat_083'] == 1: data['seat_083'] = 2
    if 'seat_084' in data and data['seat_084'] == 1: data['seat_084'] = 2
    if 'seat_085' in data and data['seat_085'] == 1: data['seat_085'] = 2
    if 'seat_086' in data and data['seat_086'] == 1: data['seat_086'] = 2
    if 'seat_087' in data and data['seat_087'] == 1: data['seat_087'] = 2
    if 'seat_088' in data and data['seat_088'] == 1: data['seat_088'] = 2
    if 'seat_089' in data and data['seat_089'] == 1: data['seat_089'] = 2
    if 'seat_090' in data and data['seat_090'] == 1: data['seat_090'] = 2
    if 'seat_091' in data and data['seat_091'] == 1: data['seat_091'] = 2
    if 'seat_092' in data and data['seat_092'] == 1: data['seat_092'] = 2
    if 'seat_093' in data and data['seat_093'] == 1: data['seat_093'] = 2
    if 'seat_094' in data and data['seat_094'] == 1: data['seat_094'] = 2
    if 'seat_095' in data and data['seat_095'] == 1: data['seat_095'] = 2
    if 'seat_096' in data and data['seat_096'] == 1: data['seat_096'] = 2
    if 'seat_097' in data and data['seat_097'] == 1: data['seat_097'] = 2
    if 'seat_098' in data and data['seat_098'] == 1: data['seat_098'] = 2
    if 'seat_099' in data and data['seat_099'] == 1: data['seat_099'] = 2
    if 'seat_100' in data and data['seat_100'] == 1: data['seat_100'] = 2
    if 'seat_101' in data and data['seat_101'] == 1: data['seat_101'] = 2
    if 'seat_102' in data and data['seat_102'] == 1: data['seat_102'] = 2
    if 'seat_103' in data and data['seat_103'] == 1: data['seat_103'] = 2
    if 'seat_104' in data and data['seat_104'] == 1: data['seat_104'] = 2
    if 'seat_105' in data and data['seat_105'] == 1: data['seat_105'] = 2
    if 'seat_106' in data and data['seat_106'] == 1: data['seat_106'] = 2
    if 'seat_107' in data and data['seat_107'] == 1: data['seat_107'] = 2
    if 'seat_108' in data and data['seat_108'] == 1: data['seat_108'] = 2
    if 'seat_109' in data and data['seat_109'] == 1: data['seat_109'] = 2
    if 'seat_110' in data and data['seat_110'] == 1: data['seat_110'] = 2
    if 'seat_111' in data and data['seat_111'] == 1: data['seat_111'] = 2
    if 'seat_112' in data and data['seat_112'] == 1: data['seat_112'] = 2
    if 'seat_113' in data and data['seat_113'] == 1: data['seat_113'] = 2
    if 'seat_114' in data and data['seat_114'] == 1: data['seat_114'] = 2
    if 'seat_115' in data and data['seat_115'] == 1: data['seat_115'] = 2
    if 'seat_116' in data and data['seat_116'] == 1: data['seat_116'] = 2
    if 'seat_117' in data and data['seat_117'] == 1: data['seat_117'] = 2
    if 'seat_118' in data and data['seat_118'] == 1: data['seat_118'] = 2
    if 'seat_119' in data and data['seat_119'] == 1: data['seat_119'] = 2
    if 'seat_120' in data and data['seat_120'] == 1: data['seat_120'] = 2
    if 'seat_121' in data and data['seat_121'] == 1: data['seat_121'] = 2
    if 'seat_122' in data and data['seat_122'] == 1: data['seat_122'] = 2
    if 'seat_123' in data and data['seat_123'] == 1: data['seat_123'] = 2
    if 'seat_124' in data and data['seat_124'] == 1: data['seat_124'] = 2
    if 'seat_125' in data and data['seat_125'] == 1: data['seat_125'] = 2
    if 'seat_126' in data and data['seat_126'] == 1: data['seat_126'] = 2
    if 'seat_127' in data and data['seat_127'] == 1: data['seat_127'] = 2
    if 'seat_128' in data and data['seat_128'] == 1: data['seat_128'] = 2
    if 'seat_129' in data and data['seat_129'] == 1: data['seat_129'] = 2
    if 'seat_130' in data and data['seat_130'] == 1: data['seat_130'] = 2
    if 'seat_131' in data and data['seat_131'] == 1: data['seat_131'] = 2
    if 'seat_132' in data and data['seat_132'] == 1: data['seat_132'] = 2
    if 'seat_133' in data and data['seat_133'] == 1: data['seat_133'] = 2
    if 'seat_134' in data and data['seat_134'] == 1: data['seat_134'] = 2
    if 'seat_135' in data and data['seat_135'] == 1: data['seat_135'] = 2
    if 'seat_136' in data and data['seat_136'] == 1: data['seat_136'] = 2
    if 'seat_137' in data and data['seat_137'] == 1: data['seat_137'] = 2
    if 'seat_138' in data and data['seat_138'] == 1: data['seat_138'] = 2
    if 'seat_139' in data and data['seat_139'] == 1: data['seat_139'] = 2
    if 'seat_140' in data and data['seat_140'] == 1: data['seat_140'] = 2
    if 'seat_141' in data and data['seat_141'] == 1: data['seat_141'] = 2
    if 'seat_142' in data and data['seat_142'] == 1: data['seat_142'] = 2
    if 'seat_143' in data and data['seat_143'] == 1: data['seat_143'] = 2
    if 'seat_144' in data and data['seat_144'] == 1: data['seat_144'] = 2
    if 'seat_145' in data and data['seat_145'] == 1: data['seat_145'] = 2
    if 'seat_146' in data and data['seat_146'] == 1: data['seat_146'] = 2
    if 'seat_147' in data and data['seat_147'] == 1: data['seat_147'] = 2
    if 'seat_148' in data and data['seat_148'] == 1: data['seat_148'] = 2
    if 'seat_149' in data and data['seat_149'] == 1: data['seat_149'] = 2
    if 'seat_150' in data and data['seat_150'] == 1: data['seat_150'] = 2
    if 'seat_151' in data and data['seat_151'] == 1: data['seat_151'] = 2
    if 'seat_152' in data and data['seat_152'] == 1: data['seat_152'] = 2
    if 'seat_153' in data and data['seat_153'] == 1: data['seat_153'] = 2
    if 'seat_154' in data and data['seat_154'] == 1: data['seat_154'] = 2
    if 'seat_155' in data and data['seat_155'] == 1: data['seat_155'] = 2
    if 'seat_156' in data and data['seat_156'] == 1: data['seat_156'] = 2
    if 'seat_157' in data and data['seat_157'] == 1: data['seat_157'] = 2
    if 'seat_158' in data and data['seat_158'] == 1: data['seat_158'] = 2
    if 'seat_159' in data and data['seat_159'] == 1: data['seat_159'] = 2
    if 'seat_160' in data and data['seat_160'] == 1: data['seat_160'] = 2
    if 'seat_161' in data and data['seat_161'] == 1: data['seat_161'] = 2
    if 'seat_162' in data and data['seat_162'] == 1: data['seat_162'] = 2
    if 'seat_163' in data and data['seat_163'] == 1: data['seat_163'] = 2
    if 'seat_164' in data and data['seat_164'] == 1: data['seat_164'] = 2
    if 'seat_165' in data and data['seat_165'] == 1: data['seat_165'] = 2
    if 'seat_166' in data and data['seat_166'] == 1: data['seat_166'] = 2
    if 'seat_167' in data and data['seat_167'] == 1: data['seat_167'] = 2
    if 'seat_168' in data and data['seat_168'] == 1: data['seat_168'] = 2
    if 'seat_169' in data and data['seat_169'] == 1: data['seat_169'] = 2
    if 'seat_170' in data and data['seat_170'] == 1: data['seat_170'] = 2
    if 'seat_171' in data and data['seat_171'] == 1: data['seat_171'] = 2
    if 'seat_172' in data and data['seat_172'] == 1: data['seat_172'] = 2
    if 'seat_173' in data and data['seat_173'] == 1: data['seat_173'] = 2
    if 'seat_174' in data and data['seat_174'] == 1: data['seat_174'] = 2
    if 'seat_175' in data and data['seat_175'] == 1: data['seat_175'] = 2
    if 'seat_176' in data and data['seat_176'] == 1: data['seat_176'] = 2
    if 'seat_177' in data and data['seat_177'] == 1: data['seat_177'] = 2
    if 'seat_178' in data and data['seat_178'] == 1: data['seat_178'] = 2
    if 'seat_179' in data and data['seat_179'] == 1: data['seat_179'] = 2
    if 'seat_180' in data and data['seat_180'] == 1: data['seat_180'] = 2
    return data

def reservData2(user,data):
   return{
            'owner': user,
            'title': data['title'],
            'room_name': data['room_name'],
            'showtime': data['showtime'],
            'seat_001': data['seat_001'],
            'seat_002': data['seat_002'],
            'seat_003': data['seat_003'],
            'seat_004': data['seat_004'],
            'seat_005': data['seat_005'],
            'seat_006': data['seat_006'],
            'seat_007': data['seat_007'],
            'seat_008': data['seat_008'],
            'seat_009': data['seat_009'],
            'seat_010': data['seat_010'],
            'seat_011': data['seat_011'],
            'seat_012': data['seat_012'],
            'seat_013': data['seat_013'],
            'seat_014': data['seat_014'],
            'seat_015': data['seat_015'],
            'seat_016': data['seat_016'],
            'seat_017': data['seat_017'],
            'seat_018': data['seat_018'],
            'seat_019': data['seat_019'],
            'seat_020': data['seat_020'],
            'seat_021': data['seat_021'],
            'seat_022': data['seat_022'],
            'seat_023': data['seat_023'],
            'seat_024': data['seat_024'],
            'seat_025': data['seat_025'],
            'seat_026': data['seat_026'],
            'seat_027': data['seat_027'],
            'seat_028': data['seat_028'],
            'seat_029': data['seat_029'],
            'seat_030': data['seat_030'],
            'seat_031': data['seat_031'],
            'seat_032': data['seat_032'],
            'seat_033': data['seat_033'],
            'seat_034': data['seat_034'],
            'seat_035': data['seat_035'],
            'seat_036': data['seat_036'],
            'seat_037': data['seat_037'],
            'seat_038': data['seat_038'],
            'seat_039': data['seat_039'],
            'seat_040': data['seat_040'],
            'seat_041': data['seat_041'],
            'seat_042': data['seat_042'],
            'seat_043': data['seat_043'],
            'seat_044': data['seat_044'],
            'seat_045': data['seat_045'],
            'seat_046': data['seat_046'],
            'seat_047': data['seat_047'],
            'seat_048': data['seat_048'],
            'seat_049': data['seat_049'],
            'seat_050': data['seat_050'],
            'seat_051': data['seat_051'],
            'seat_052': data['seat_052'],
            'seat_053': data['seat_053'],
            'seat_054': data['seat_054'],
            'seat_055': data['seat_055'],
            'seat_056': data['seat_056'],
            'seat_057': data['seat_057'],
            'seat_058': data['seat_058'],
            'seat_059': data['seat_059'],
            'seat_060': data['seat_060'],
            'seat_061': data['seat_061'],
            'seat_062': data['seat_062'],
            'seat_063': data['seat_063'],
            'seat_064': data['seat_064'],
            'seat_065': data['seat_065'],
            'seat_066': data['seat_066'],
            'seat_067': data['seat_067'],
            'seat_068': data['seat_068'],
            'seat_069': data['seat_069'],
            'seat_070': data['seat_070'],
            'seat_071': data['seat_071'],
            'seat_072': data['seat_072'],
            'seat_073': data['seat_073'],
            'seat_074': data['seat_074'],
            'seat_075': data['seat_075'],
            'seat_076': data['seat_076'],
            'seat_077': data['seat_077'],
            'seat_078': data['seat_078'],
            'seat_079': data['seat_079'],
            'seat_080': data['seat_080'],
            'seat_081': data['seat_081'],
            'seat_082': data['seat_082'],
            'seat_083': data['seat_083'],
            'seat_084': data['seat_084'],
            'seat_085': data['seat_085'],
            'seat_086': data['seat_086'],
            'seat_087': data['seat_087'],
            'seat_088': data['seat_088'],
            'seat_089': data['seat_089'],
            'seat_090': data['seat_090'],
            'seat_091': data['seat_091'],
            'seat_092': data['seat_092'],
            'seat_093': data['seat_093'],
            'seat_094': data['seat_094'],
            'seat_095': data['seat_095'],
            'seat_096': data['seat_096'],
            'seat_097': data['seat_097'],
            'seat_098': data['seat_098'],
            'seat_099': data['seat_099'],
            'seat_100': data['seat_100'],
            'seat_101': data['seat_101'],
            'seat_102': data['seat_102'],
            'seat_103': data['seat_103'],
            'seat_104': data['seat_104'],
            'seat_105': data['seat_105'],
            'seat_106': data['seat_106'],
            'seat_107': data['seat_107'],
            'seat_108': data['seat_108'],
            'seat_109': data['seat_109'],
            'seat_110': data['seat_110'],
            'seat_111': data['seat_111'],
            'seat_112': data['seat_112'],
            'seat_113': data['seat_113'],
            'seat_114': data['seat_114'],
            'seat_115': data['seat_115'],
            'seat_116': data['seat_116'],
            'seat_117': data['seat_117'],
            'seat_118': data['seat_118'],
            'seat_119': data['seat_119'],
            'seat_120': data['seat_120'],
            'seat_121': data['seat_121'],
            'seat_122': data['seat_122'],
            'seat_123': data['seat_123'],
            'seat_124': data['seat_124'],
            'seat_125': data['seat_125'],
            'seat_126': data['seat_126'],
            'seat_127': data['seat_127'],
            'seat_128': data['seat_128'],
            'seat_129': data['seat_129'],
            'seat_130': data['seat_130'],
            'seat_131': data['seat_131'],
            'seat_132': data['seat_132'],
            'seat_133': data['seat_133'],
            'seat_134': data['seat_134'],
            'seat_135': data['seat_135'],
            'seat_136': data['seat_136'],
            'seat_137': data['seat_137'],
            'seat_138': data['seat_138'],
            'seat_139': data['seat_139'],
            'seat_140': data['seat_140'],
            'seat_141': data['seat_141'],
            'seat_142': data['seat_142'],
            'seat_143': data['seat_143'],
            'seat_144': data['seat_144'],
            'seat_145': data['seat_145'],
            'seat_146': data['seat_146'],
            'seat_147': data['seat_147'],
            'seat_148': data['seat_148'],
            'seat_149': data['seat_149'],
            'seat_150': data['seat_150'],
            'seat_151': data['seat_151'],
            'seat_152': data['seat_152'],
            'seat_153': data['seat_153'],
            'seat_154': data['seat_154'],
            'seat_155': data['seat_155'],
            'seat_156': data['seat_156'],
            'seat_157': data['seat_157'],
            'seat_158': data['seat_158'],
            'seat_159': data['seat_159'],
            'seat_160': data['seat_160'],
            'seat_161': data['seat_161'],
            'seat_162': data['seat_162'],
            'seat_163': data['seat_163'],
            'seat_164': data['seat_164'],
            'seat_165': data['seat_165'],
            'seat_166': data['seat_166'],
            'seat_167': data['seat_167'],
            'seat_168': data['seat_168'],
            'seat_169': data['seat_169'],
            'seat_170': data['seat_170'],
            'seat_171': data['seat_171'],
            'seat_172': data['seat_172'],
            'seat_173': data['seat_173'],
            'seat_174': data['seat_174'],
            'seat_175': data['seat_175'],
            'seat_176': data['seat_176'],
            'seat_177': data['seat_177'],
            'seat_178': data['seat_178'],
            'seat_179': data['seat_179'],
            'seat_180': data['seat_180'],
            'seat_count': data['seat_count'],
   }