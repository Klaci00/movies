import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useSeatStates} from './SetseatStates';
const VenueDetail = () => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const { id, venueId } = useParams();
  const [show, setShow] = useState(null);
  const [venue, setVenue] = useState(null);
  const { seat001, setSeat001,seat002, setSeat002,seat003, setSeat003,seat004, setSeat004,seat005, setSeat005,seat006, setSeat006,seat007, setSeat007,seat008, setSeat008,seat009, setSeat009,seat010, setSeat010,seat011, setSeat011,seat012, setSeat012,seat013, setSeat013,seat014, setSeat014,seat015, setSeat015,seat016, setSeat016,seat017, setSeat017,seat018, setSeat018,seat019, setSeat019,seat020, setSeat020,seat021, setSeat021,seat022, setSeat022,seat023, setSeat023,seat024, setSeat024,seat025, setSeat025,seat026, setSeat026,seat027, setSeat027,seat028, setSeat028,seat029, setSeat029,seat030, setSeat030,seat031, setSeat031,seat032, setSeat032,seat033, setSeat033,seat034, setSeat034,seat035, setSeat035,seat036, setSeat036,seat037, setSeat037,seat038, setSeat038,seat039, setSeat039,seat040, setSeat040,seat041, setSeat041,seat042, setSeat042,seat043, setSeat043,seat044, setSeat044,seat045, setSeat045,seat046, setSeat046,seat047, setSeat047,seat048, setSeat048,seat049, setSeat049,seat050, setSeat050,seat051, setSeat051,seat052, setSeat052,seat053, setSeat053,seat054, setSeat054,seat055, setSeat055,seat056, setSeat056,seat057, setSeat057,seat058, setSeat058,seat059, setSeat059,seat060, setSeat060,seat061, setSeat061,seat062, setSeat062,seat063, setSeat063,seat064, setSeat064,seat065, setSeat065,seat066, setSeat066,seat067, setSeat067,seat068, setSeat068,seat069, setSeat069,seat070, setSeat070,seat071, setSeat071,seat072, setSeat072,seat073, setSeat073,seat074, setSeat074,seat075, setSeat075,seat076, setSeat076,seat077, setSeat077,seat078, setSeat078,seat079, setSeat079,seat080, setSeat080,seat081, setSeat081,seat082, setSeat082,seat083, setSeat083,seat084, setSeat084,seat085, setSeat085,seat086, setSeat086,seat087, setSeat087,seat088, setSeat088,seat089, setSeat089,seat090, setSeat090,seat091, setSeat091,seat092, setSeat092,seat093, setSeat093,seat094, setSeat094,seat095, setSeat095,seat096, setSeat096,seat097, setSeat097,seat098, setSeat098,seat099, setSeat099,seat100, setSeat100,seat101, setSeat101,seat102, setSeat102,seat103, setSeat103,seat104, setSeat104,seat105, setSeat105,seat106, setSeat106,seat107, setSeat107,seat108, setSeat108,seat109, setSeat109,seat110, setSeat110,seat111, setSeat111,seat112, setSeat112,seat113, setSeat113,seat114, setSeat114,seat115, setSeat115,seat116, setSeat116,seat117, setSeat117,seat118, setSeat118,seat119, setSeat119,seat120, setSeat120,seat121, setSeat121,seat122, setSeat122,seat123, setSeat123,seat124, setSeat124,seat125, setSeat125,seat126, setSeat126,seat127, setSeat127,seat128, setSeat128,seat129, setSeat129,seat130, setSeat130,seat131, setSeat131,seat132, setSeat132,seat133, setSeat133,seat134, setSeat134,seat135, setSeat135,seat136, setSeat136,seat137, setSeat137,seat138, setSeat138,seat139, setSeat139,seat140, setSeat140,seat141, setSeat141,seat142, setSeat142,seat143, setSeat143,seat144, setSeat144,seat145, setSeat145,seat146, setSeat146,seat147, setSeat147,seat148, setSeat148,seat149, setSeat149,seat150, setSeat150,seat151, setSeat151,seat152, setSeat152,seat153, setSeat153,seat154, setSeat154,seat155, setSeat155,seat156, setSeat156,seat157, setSeat157,seat158, setSeat158,seat159, setSeat159,seat160, setSeat160,seat161, setSeat161,seat162, setSeat162,seat163, setSeat163,seat164, setSeat164,seat165, setSeat165,seat166, setSeat166,seat167, setSeat167,seat168, setSeat168,seat169, setSeat169,seat170, setSeat170,seat171, setSeat171,seat172, setSeat172,seat173, setSeat173,seat174, setSeat174,seat175, setSeat175,seat176, setSeat176,seat177, setSeat177,seat178, setSeat178,seat179, setSeat179,seat180, setSeat180, } = useSeatStates();

  const seats = [
    {seat: seat001, setSeat: setSeat001},
    {seat: seat002, setSeat: setSeat002},
    {seat: seat003, setSeat: setSeat003},
    {seat: seat004, setSeat: setSeat004},
    {seat: seat005, setSeat: setSeat005},
    {seat: seat006, setSeat: setSeat006},
    {seat: seat007, setSeat: setSeat007},
    {seat: seat008, setSeat: setSeat008},
    {seat: seat009, setSeat: setSeat009},
    {seat: seat010, setSeat: setSeat010},
    {seat: seat011, setSeat: setSeat011},
    {seat: seat012, setSeat: setSeat012},
    {seat: seat013, setSeat: setSeat013},
    {seat: seat014, setSeat: setSeat014},
    {seat: seat015, setSeat: setSeat015},
    {seat: seat016, setSeat: setSeat016},
    {seat: seat017, setSeat: setSeat017},
    {seat: seat018, setSeat: setSeat018},
    {seat: seat019, setSeat: setSeat019},
    {seat: seat020, setSeat: setSeat020},
    {seat: seat021, setSeat: setSeat021},
    {seat: seat022, setSeat: setSeat022},
    {seat: seat023, setSeat: setSeat023},
    {seat: seat024, setSeat: setSeat024},
    {seat: seat025, setSeat: setSeat025},
    {seat: seat026, setSeat: setSeat026},
    {seat: seat027, setSeat: setSeat027},
    {seat: seat028, setSeat: setSeat028},
    {seat: seat029, setSeat: setSeat029},
    {seat: seat030, setSeat: setSeat030},
    {seat: seat031, setSeat: setSeat031},
    {seat: seat032, setSeat: setSeat032},
    {seat: seat033, setSeat: setSeat033},
    {seat: seat034, setSeat: setSeat034},
    {seat: seat035, setSeat: setSeat035},
    {seat: seat036, setSeat: setSeat036},
    {seat: seat037, setSeat: setSeat037},
    {seat: seat038, setSeat: setSeat038},
    {seat: seat039, setSeat: setSeat039},
    {seat: seat040, setSeat: setSeat040},
    {seat: seat041, setSeat: setSeat041},
    {seat: seat042, setSeat: setSeat042},
    {seat: seat043, setSeat: setSeat043},
    {seat: seat044, setSeat: setSeat044},
    {seat: seat045, setSeat: setSeat045},
    {seat: seat046, setSeat: setSeat046},
    {seat: seat047, setSeat: setSeat047},
    {seat: seat048, setSeat: setSeat048},
    {seat: seat049, setSeat: setSeat049},
    {seat: seat050, setSeat: setSeat050},
    {seat: seat051, setSeat: setSeat051},
    {seat: seat052, setSeat: setSeat052},
    {seat: seat053, setSeat: setSeat053},
    {seat: seat054, setSeat: setSeat054},
    {seat: seat055, setSeat: setSeat055},
    {seat: seat056, setSeat: setSeat056},
    {seat: seat057, setSeat: setSeat057},
    {seat: seat058, setSeat: setSeat058},
    {seat: seat059, setSeat: setSeat059},
    {seat: seat060, setSeat: setSeat060},
    {seat: seat061, setSeat: setSeat061},
    {seat: seat062, setSeat: setSeat062},
    {seat: seat063, setSeat: setSeat063},
    {seat: seat064, setSeat: setSeat064},
    {seat: seat065, setSeat: setSeat065},
    {seat: seat066, setSeat: setSeat066},
    {seat: seat067, setSeat: setSeat067},
    {seat: seat068, setSeat: setSeat068},
    {seat: seat069, setSeat: setSeat069},
    {seat: seat070, setSeat: setSeat070},
    {seat: seat071, setSeat: setSeat071},
    {seat: seat072, setSeat: setSeat072},
    {seat: seat073, setSeat: setSeat073},
    {seat: seat074, setSeat: setSeat074},
    {seat: seat075, setSeat: setSeat075},
    {seat: seat076, setSeat: setSeat076},
    {seat: seat077, setSeat: setSeat077},
    {seat: seat078, setSeat: setSeat078},
    {seat: seat079, setSeat: setSeat079},
    {seat: seat080, setSeat: setSeat080},
    {seat: seat081, setSeat: setSeat081},
    {seat: seat082, setSeat: setSeat082},
    {seat: seat083, setSeat: setSeat083},
    {seat: seat084, setSeat: setSeat084},
    {seat: seat085, setSeat: setSeat085},
    {seat: seat086, setSeat: setSeat086},
    {seat: seat087, setSeat: setSeat087},
    {seat: seat088, setSeat: setSeat088},
    {seat: seat089, setSeat: setSeat089},
    {seat: seat090, setSeat: setSeat090},
    {seat: seat091, setSeat: setSeat091},
    {seat: seat092, setSeat: setSeat092},
    {seat: seat093, setSeat: setSeat093},
    {seat: seat094, setSeat: setSeat094},
    {seat: seat095, setSeat: setSeat095},
    {seat: seat096, setSeat: setSeat096},
    {seat: seat097, setSeat: setSeat097},
    {seat: seat098, setSeat: setSeat098},
    {seat: seat099, setSeat: setSeat099},
    {seat: seat100, setSeat: setSeat100},
    {seat: seat101, setSeat: setSeat101},
    {seat: seat102, setSeat: setSeat102},
    {seat: seat103, setSeat: setSeat103},
    {seat: seat104, setSeat: setSeat104},
    {seat: seat105, setSeat: setSeat105},
    {seat: seat106, setSeat: setSeat106},
    {seat: seat107, setSeat: setSeat107},
    {seat: seat108, setSeat: setSeat108},
    {seat: seat109, setSeat: setSeat109},
    {seat: seat110, setSeat: setSeat110},
    {seat: seat111, setSeat: setSeat111},
    {seat: seat112, setSeat: setSeat112},
    {seat: seat113, setSeat: setSeat113},
    {seat: seat114, setSeat: setSeat114},
    {seat: seat115, setSeat: setSeat115},
    {seat: seat116, setSeat: setSeat116},
    {seat: seat117, setSeat: setSeat117},
    {seat: seat118, setSeat: setSeat118},
    {seat: seat119, setSeat: setSeat119},
    {seat: seat120, setSeat: setSeat120},
    {seat: seat121, setSeat: setSeat121},
    {seat: seat122, setSeat: setSeat122},
    {seat: seat123, setSeat: setSeat123},
    {seat: seat124, setSeat: setSeat124},
    {seat: seat125, setSeat: setSeat125},
    {seat: seat126, setSeat: setSeat126},
    {seat: seat127, setSeat: setSeat127},
    {seat: seat128, setSeat: setSeat128},
    {seat: seat129, setSeat: setSeat129},
    {seat: seat130, setSeat: setSeat130},
    {seat: seat131, setSeat: setSeat131},
    {seat: seat132, setSeat: setSeat132},
    {seat: seat133, setSeat: setSeat133},
    {seat: seat134, setSeat: setSeat134},
    {seat: seat135, setSeat: setSeat135},
    {seat: seat136, setSeat: setSeat136},
    {seat: seat137, setSeat: setSeat137},
    {seat: seat138, setSeat: setSeat138},
    {seat: seat139, setSeat: setSeat139},
    {seat: seat140, setSeat: setSeat140},
    {seat: seat141, setSeat: setSeat141},
    {seat: seat142, setSeat: setSeat142},
    {seat: seat143, setSeat: setSeat143},
    {seat: seat144, setSeat: setSeat144},
    {seat: seat145, setSeat: setSeat145},
    {seat: seat146, setSeat: setSeat146},
    {seat: seat147, setSeat: setSeat147},
    {seat: seat148, setSeat: setSeat148},
    {seat: seat149, setSeat: setSeat149},
    {seat: seat150, setSeat: setSeat150},
    {seat: seat151, setSeat: setSeat151},
    {seat: seat152, setSeat: setSeat152},
    {seat: seat153, setSeat: setSeat153},
    {seat: seat154, setSeat: setSeat154},
    {seat: seat155, setSeat: setSeat155},
    {seat: seat156, setSeat: setSeat156},
    {seat: seat157, setSeat: setSeat157},
    {seat: seat158, setSeat: setSeat158},
    {seat: seat159, setSeat: setSeat159},
    {seat: seat160, setSeat: setSeat160},
    {seat: seat161, setSeat: setSeat161},
    {seat: seat162, setSeat: setSeat162},
    {seat: seat163, setSeat: setSeat163},
    {seat: seat164, setSeat: setSeat164},
    {seat: seat165, setSeat: setSeat165},
    {seat: seat166, setSeat: setSeat166},
    {seat: seat167, setSeat: setSeat167},
    {seat: seat168, setSeat: setSeat168},
    {seat: seat169, setSeat: setSeat169},
    {seat: seat170, setSeat: setSeat170},
    {seat: seat171, setSeat: setSeat171},
    {seat: seat172, setSeat: setSeat172},
    {seat: seat173, setSeat: setSeat173},
    {seat: seat174, setSeat: setSeat174},
    {seat: seat175, setSeat: setSeat175},
    {seat: seat176, setSeat: setSeat176},
    {seat: seat177, setSeat: setSeat177},
    {seat: seat178, setSeat: setSeat178},
    {seat: seat179, setSeat: setSeat179},
    {seat: seat180, setSeat: setSeat180},
    ];
  
  useEffect(() => {
    // Fetch show details
    axios.get(`http://127.0.0.1:8000/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the show!', error);
      });

    // Fetch venue details
    axios.get(`http://127.0.0.1:8000/venues/${venueId}`)
      .then(response => {
        setVenue(response.data);
        setSeat001(response.data.seat_001);
        setSeat002(response.data.seat_002);
        setSeat003(response.data.seat_003);
        setSeat004(response.data.seat_004);
        setSeat005(response.data.seat_005);
        setSeat006(response.data.seat_006);
        setSeat007(response.data.seat_007);
        setSeat008(response.data.seat_008);
        setSeat009(response.data.seat_009);
        setSeat010(response.data.seat_010);
        setSeat011(response.data.seat_011);
        setSeat012(response.data.seat_012);
        setSeat013(response.data.seat_013);
        setSeat014(response.data.seat_014);
        setSeat015(response.data.seat_015);
        setSeat016(response.data.seat_016);
        setSeat017(response.data.seat_017);
        setSeat018(response.data.seat_018);
        setSeat019(response.data.seat_019);
        setSeat020(response.data.seat_020);
        setSeat021(response.data.seat_021);
        setSeat022(response.data.seat_022);
        setSeat023(response.data.seat_023);
        setSeat024(response.data.seat_024);
        setSeat025(response.data.seat_025);
        setSeat026(response.data.seat_026);
        setSeat027(response.data.seat_027);
        setSeat028(response.data.seat_028);
        setSeat029(response.data.seat_029);
        setSeat030(response.data.seat_030);
        setSeat031(response.data.seat_031);
        setSeat032(response.data.seat_032);
        setSeat033(response.data.seat_033);
        setSeat034(response.data.seat_034);
        setSeat035(response.data.seat_035);
        setSeat036(response.data.seat_036);
        setSeat037(response.data.seat_037);
        setSeat038(response.data.seat_038);
        setSeat039(response.data.seat_039);
        setSeat040(response.data.seat_040);
        setSeat041(response.data.seat_041);
        setSeat042(response.data.seat_042);
        setSeat043(response.data.seat_043);
        setSeat044(response.data.seat_044);
        setSeat045(response.data.seat_045);
        setSeat046(response.data.seat_046);
        setSeat047(response.data.seat_047);
        setSeat048(response.data.seat_048);
        setSeat049(response.data.seat_049);
        setSeat050(response.data.seat_050);
        setSeat051(response.data.seat_051);
        setSeat052(response.data.seat_052);
        setSeat053(response.data.seat_053);
        setSeat054(response.data.seat_054);
        setSeat055(response.data.seat_055);
        setSeat056(response.data.seat_056);
        setSeat057(response.data.seat_057);
        setSeat058(response.data.seat_058);
        setSeat059(response.data.seat_059);
        setSeat060(response.data.seat_060);
        setSeat061(response.data.seat_061);
        setSeat062(response.data.seat_062);
        setSeat063(response.data.seat_063);
        setSeat064(response.data.seat_064);
        setSeat065(response.data.seat_065);
        setSeat066(response.data.seat_066);
        setSeat067(response.data.seat_067);
        setSeat068(response.data.seat_068);
        setSeat069(response.data.seat_069);
        setSeat070(response.data.seat_070);
        setSeat071(response.data.seat_071);
        setSeat072(response.data.seat_072);
        setSeat073(response.data.seat_073);
        setSeat074(response.data.seat_074);
        setSeat075(response.data.seat_075);
        setSeat076(response.data.seat_076);
        setSeat077(response.data.seat_077);
        setSeat078(response.data.seat_078);
        setSeat079(response.data.seat_079);
        setSeat080(response.data.seat_080);
        setSeat081(response.data.seat_081);
        setSeat082(response.data.seat_082);
        setSeat083(response.data.seat_083);
        setSeat084(response.data.seat_084);
        setSeat085(response.data.seat_085);
        setSeat086(response.data.seat_086);
        setSeat087(response.data.seat_087);
        setSeat088(response.data.seat_088);
        setSeat089(response.data.seat_089);
        setSeat090(response.data.seat_090);
        setSeat091(response.data.seat_091);
        setSeat092(response.data.seat_092);
        setSeat093(response.data.seat_093);
        setSeat094(response.data.seat_094);
        setSeat095(response.data.seat_095);
        setSeat096(response.data.seat_096);
        setSeat097(response.data.seat_097);
        setSeat098(response.data.seat_098);
        setSeat099(response.data.seat_099);
        setSeat100(response.data.seat_100);
        setSeat101(response.data.seat_101);
        setSeat102(response.data.seat_102);
        setSeat103(response.data.seat_103);
        setSeat104(response.data.seat_104);
        setSeat105(response.data.seat_105);
        setSeat106(response.data.seat_106);
        setSeat107(response.data.seat_107);
        setSeat108(response.data.seat_108);
        setSeat109(response.data.seat_109);
        setSeat110(response.data.seat_110);
        setSeat111(response.data.seat_111);
        setSeat112(response.data.seat_112);
        setSeat113(response.data.seat_113);
        setSeat114(response.data.seat_114);
        setSeat115(response.data.seat_115);
        setSeat116(response.data.seat_116);
        setSeat117(response.data.seat_117);
        setSeat118(response.data.seat_118);
        setSeat119(response.data.seat_119);
        setSeat120(response.data.seat_120);
        setSeat121(response.data.seat_121);
        setSeat122(response.data.seat_122);
        setSeat123(response.data.seat_123);
        setSeat124(response.data.seat_124);
        setSeat125(response.data.seat_125);
        setSeat126(response.data.seat_126);
        setSeat127(response.data.seat_127);
        setSeat128(response.data.seat_128);
        setSeat129(response.data.seat_129);
        setSeat130(response.data.seat_130);
        setSeat131(response.data.seat_131);
        setSeat132(response.data.seat_132);
        setSeat133(response.data.seat_133);
        setSeat134(response.data.seat_134);
        setSeat135(response.data.seat_135);
        setSeat136(response.data.seat_136);
        setSeat137(response.data.seat_137);
        setSeat138(response.data.seat_138);
        setSeat139(response.data.seat_139);
        setSeat140(response.data.seat_140);
        setSeat141(response.data.seat_141);
        setSeat142(response.data.seat_142);
        setSeat143(response.data.seat_143);
        setSeat144(response.data.seat_144);
        setSeat145(response.data.seat_145);
        setSeat146(response.data.seat_146);
        setSeat147(response.data.seat_147);
        setSeat148(response.data.seat_148);
        setSeat149(response.data.seat_149);
        setSeat150(response.data.seat_150);
        setSeat151(response.data.seat_151);
        setSeat152(response.data.seat_152);
        setSeat153(response.data.seat_153);
        setSeat154(response.data.seat_154);
        setSeat155(response.data.seat_155);
        setSeat156(response.data.seat_156);
        setSeat157(response.data.seat_157);
        setSeat158(response.data.seat_158);
        setSeat159(response.data.seat_159);
        setSeat160(response.data.seat_160);
        setSeat161(response.data.seat_161);
        setSeat162(response.data.seat_162);
        setSeat163(response.data.seat_163);
        setSeat164(response.data.seat_164);
        setSeat165(response.data.seat_165);
        setSeat166(response.data.seat_166);
        setSeat167(response.data.seat_167);
        setSeat168(response.data.seat_168);
        setSeat169(response.data.seat_169);
        setSeat170(response.data.seat_170);
        setSeat171(response.data.seat_171);
        setSeat172(response.data.seat_172);
        setSeat173(response.data.seat_173);
        setSeat174(response.data.seat_174);
        setSeat175(response.data.seat_175);
        setSeat176(response.data.seat_176);
        setSeat177(response.data.seat_177);
        setSeat178(response.data.seat_178);
        setSeat179(response.data.seat_179);
        setSeat180(response.data.seat_180);
            })
      .catch(error => {
        console.error('There was an error fetching the venue!', error);
      });
  }, [id, venueId]);

  

  const toggleSeat = (seat, setSeat) => {
    if (seat !== 2) {
      setSeat(prevSeat => (prevSeat === 0 ? 1 : 0));
    }
  };

  // Define the getCSRFToken function
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}




  // Update the reserveSeats function to use the CSRF token
  const reserveSeats = async () => {
    const userId = localStorage.getItem('userId');
    const csrftoken = getCookie('csrftoken');
    console.log(csrftoken);

    axios.patch(`http://127.0.0.1:8000/venues/${venueId}/`, {
      title: show.title,
      room_name: venue.room_name,
      showtime: venue.showtime,
      seat_001: seat001,
      seat_002: seat002,
      seat_003: seat003,
      seat_004: seat004,
      seat_005: seat005,
      seat_006: seat006,
      seat_007: seat007,
      seat_008: seat008,
      seat_009: seat009,
      seat_010: seat010,
      seat_011: seat011,
      seat_012: seat012,
      seat_013: seat013,
      seat_014: seat014,
      seat_015: seat015,
      seat_016: seat016,
      seat_017: seat017,
      seat_018: seat018,
      seat_019: seat019,
      seat_020: seat020,
      seat_021: seat021,
      seat_022: seat022,
      seat_023: seat023,
      seat_024: seat024,
      seat_025: seat025,
      seat_026: seat026,
      seat_027: seat027,
      seat_028: seat028,
      seat_029: seat029,
      seat_030: seat030,
      seat_031: seat031,
      seat_032: seat032,
      seat_033: seat033,
      seat_034: seat034,
      seat_035: seat035,
      seat_036: seat036,
      seat_037: seat037,
      seat_038: seat038,
      seat_039: seat039,
      seat_040: seat040,
      seat_041: seat041,
      seat_042: seat042,
      seat_043: seat043,
      seat_044: seat044,
      seat_045: seat045,
      seat_046: seat046,
      seat_047: seat047,
      seat_048: seat048,
      seat_049: seat049,
      seat_050: seat050,
      seat_051: seat051,
      seat_052: seat052,
      seat_053: seat053,
      seat_054: seat054,
      seat_055: seat055,
      seat_056: seat056,
      seat_057: seat057,
      seat_058: seat058,
      seat_059: seat059,
      seat_060: seat060,
      seat_061: seat061,
      seat_062: seat062,
      seat_063: seat063,
      seat_064: seat064,
      seat_065: seat065,
      seat_066: seat066,
      seat_067: seat067,
      seat_068: seat068,
      seat_069: seat069,
      seat_070: seat070,
      seat_071: seat071,
      seat_072: seat072,
      seat_073: seat073,
      seat_074: seat074,
      seat_075: seat075,
      seat_076: seat076,
      seat_077: seat077,
      seat_078: seat078,
      seat_079: seat079,
      seat_080: seat080,
      seat_081: seat081,
      seat_082: seat082,
      seat_083: seat083,
      seat_084: seat084,
      seat_085: seat085,
      seat_086: seat086,
      seat_087: seat087,
      seat_088: seat088,
      seat_089: seat089,
      seat_090: seat090,
      seat_091: seat091,
      seat_092: seat092,
      seat_093: seat093,
      seat_094: seat094,
      seat_095: seat095,
      seat_096: seat096,
      seat_097: seat097,
      seat_098: seat098,
      seat_099: seat099,
      seat_100: seat100,
      seat_101: seat101,
      seat_102: seat102,
      seat_103: seat103,
      seat_104: seat104,
      seat_105: seat105,
      seat_106: seat106,
      seat_107: seat107,
      seat_108: seat108,
      seat_109: seat109,
      seat_110: seat110,
      seat_111: seat111,
      seat_112: seat112,
      seat_113: seat113,
      seat_114: seat114,
      seat_115: seat115,
      seat_116: seat116,
      seat_117: seat117,
      seat_118: seat118,
      seat_119: seat119,
      seat_120: seat120,
      seat_121: seat121,
      seat_122: seat122,
      seat_123: seat123,
      seat_124: seat124,
      seat_125: seat125,
      seat_126: seat126,
      seat_127: seat127,
      seat_128: seat128,
      seat_129: seat129,
      seat_130: seat130,
      seat_131: seat131,
      seat_132: seat132,
      seat_133: seat133,
      seat_134: seat134,
      seat_135: seat135,
      seat_136: seat136,
      seat_137: seat137,
      seat_138: seat138,
      seat_139: seat139,
      seat_140: seat140,
      seat_141: seat141,
      seat_142: seat142,
      seat_143: seat143,
      seat_144: seat144,
      seat_145: seat145,
      seat_146: seat146,
      seat_147: seat147,
      seat_148: seat148,
      seat_149: seat149,
      seat_150: seat150,
      seat_151: seat151,
      seat_152: seat152,
      seat_153: seat153,
      seat_154: seat154,
      seat_155: seat155,
      seat_156: seat156,
      seat_157: seat157,
      seat_158: seat158,
      seat_159: seat159,
      seat_160: seat160,
      seat_161: seat161,
      seat_162: seat162,
      seat_163: seat163,
      seat_164: seat164,
      seat_165: seat165,
      seat_166: seat166,
      seat_167: seat167,
      seat_168: seat168,
      seat_169: seat169,
      seat_170: seat170,
      seat_171: seat171,
      seat_172: seat172,
      seat_173: seat173,
      seat_174: seat174,
      seat_175: seat175,
      seat_176: seat176,
      seat_177: seat177,
      seat_178: seat178,
      seat_179: seat179,
      seat_180: seat180,
      user_id: userId
    }, {
      headers: {
        'X-CSRFToken': csrftoken
      }
    })
    
    .then(response => {
      alert('Seats reserved successfully!');
      
    })
    .catch(error => {
      console.error('There was an error reserving the seats!', error);
      console.log(show.title)
    });
    
    const seatCount = [seat001, seat002, seat003, seat004, seat005, seat006, seat007, seat008, seat009, seat010, seat011, seat012, seat013, seat014, seat015, seat016, seat017, seat018, seat019, seat020, seat021, seat022, seat023, seat024, seat025, seat026, seat027, seat028, seat029, seat030, seat031, seat032, seat033, seat034, seat035, seat036, seat037, seat038, seat039, seat040, seat041, seat042, seat043, seat044, seat045, seat046, seat047, seat048, seat049, seat050, seat051, seat052, seat053, seat054, seat055, seat056, seat057, seat058, seat059, seat060, seat061, seat062, seat063, seat064, seat065, seat066, seat067, seat068, seat069, seat070, seat071, seat072, seat073, seat074, seat075, seat076, seat077, seat078, seat079, seat080, seat081, seat082, seat083, seat084, seat085, seat086, seat087, seat088, seat089, seat090, seat091, seat092, seat093, seat094, seat095, seat096, seat097, seat098, seat099, seat100, seat101, seat102, seat103, seat104, seat105, seat106, seat107, seat108, seat109, seat110, seat111, seat112, seat113, seat114, seat115, seat116, seat117, seat118, seat119, seat120, seat121, seat122, seat123, seat124, seat125, seat126, seat127, seat128, seat129, seat130, seat131, seat132, seat133, seat134, seat135, seat136, seat137, seat138, seat139, seat140, seat141, seat142, seat143, seat144, seat145, seat146, seat147, seat148, seat149, seat150, seat151, seat152, seat153, seat154, seat155, seat156, seat157, seat158, seat159, seat160, seat161, seat162, seat163, seat164, seat165, seat166, seat167, seat168, seat169, seat170, seat171, seat172, seat173, seat174, seat175, seat176, seat177, seat178, seat179, seat180,].reduce((count, seat) => {
      return count + (seat === 1 ? 1 : 0);},0);
      console.log(seatCount);
    console.log(venue.id);
      axios.post(`http://127.0.0.1:8000/reservations/`, {
        venueId: venue.id,
        title: show.title,
        room_name: venue.room_name,
        showtime: venue.showtime,
        seat_001: seat001,
        seat_002: seat002,
        seat_003: seat003,
        seat_004: seat004,
        seat_005: seat005,
        seat_006: seat006,
        seat_007: seat007,
        seat_008: seat008,
        seat_009: seat009,
        seat_010: seat010,
        seat_011: seat011,
        seat_012: seat012,
        seat_013: seat013,
        seat_014: seat014,
        seat_015: seat015,
        seat_016: seat016,
        seat_017: seat017,
        seat_018: seat018,
        seat_019: seat019,
        seat_020: seat020,
        seat_021: seat021,
        seat_022: seat022,
        seat_023: seat023,
        seat_024: seat024,
        seat_025: seat025,
        seat_026: seat026,
        seat_027: seat027,
        seat_028: seat028,
        seat_029: seat029,
        seat_030: seat030,
        seat_031: seat031,
        seat_032: seat032,
        seat_033: seat033,
        seat_034: seat034,
        seat_035: seat035,
        seat_036: seat036,
        seat_037: seat037,
        seat_038: seat038,
        seat_039: seat039,
        seat_040: seat040,
        seat_041: seat041,
        seat_042: seat042,
        seat_043: seat043,
        seat_044: seat044,
        seat_045: seat045,
        seat_046: seat046,
        seat_047: seat047,
        seat_048: seat048,
        seat_049: seat049,
        seat_050: seat050,
        seat_051: seat051,
        seat_052: seat052,
        seat_053: seat053,
        seat_054: seat054,
        seat_055: seat055,
        seat_056: seat056,
        seat_057: seat057,
        seat_058: seat058,
        seat_059: seat059,
        seat_060: seat060,
        seat_061: seat061,
        seat_062: seat062,
        seat_063: seat063,
        seat_064: seat064,
        seat_065: seat065,
        seat_066: seat066,
        seat_067: seat067,
        seat_068: seat068,
        seat_069: seat069,
        seat_070: seat070,
        seat_071: seat071,
        seat_072: seat072,
        seat_073: seat073,
        seat_074: seat074,
        seat_075: seat075,
        seat_076: seat076,
        seat_077: seat077,
        seat_078: seat078,
        seat_079: seat079,
        seat_080: seat080,
        seat_081: seat081,
        seat_082: seat082,
        seat_083: seat083,
        seat_084: seat084,
        seat_085: seat085,
        seat_086: seat086,
        seat_087: seat087,
        seat_088: seat088,
        seat_089: seat089,
        seat_090: seat090,
        seat_091: seat091,
        seat_092: seat092,
        seat_093: seat093,
        seat_094: seat094,
        seat_095: seat095,
        seat_096: seat096,
        seat_097: seat097,
        seat_098: seat098,
        seat_099: seat099,
        seat_100: seat100,
        seat_101: seat101,
        seat_102: seat102,
        seat_103: seat103,
        seat_104: seat104,
        seat_105: seat105,
        seat_106: seat106,
        seat_107: seat107,
        seat_108: seat108,
        seat_109: seat109,
        seat_110: seat110,
        seat_111: seat111,
        seat_112: seat112,
        seat_113: seat113,
        seat_114: seat114,
        seat_115: seat115,
        seat_116: seat116,
        seat_117: seat117,
        seat_118: seat118,
        seat_119: seat119,
        seat_120: seat120,
        seat_121: seat121,
        seat_122: seat122,
        seat_123: seat123,
        seat_124: seat124,
        seat_125: seat125,
        seat_126: seat126,
        seat_127: seat127,
        seat_128: seat128,
        seat_129: seat129,
        seat_130: seat130,
        seat_131: seat131,
        seat_132: seat132,
        seat_133: seat133,
        seat_134: seat134,
        seat_135: seat135,
        seat_136: seat136,
        seat_137: seat137,
        seat_138: seat138,
        seat_139: seat139,
        seat_140: seat140,
        seat_141: seat141,
        seat_142: seat142,
        seat_143: seat143,
        seat_144: seat144,
        seat_145: seat145,
        seat_146: seat146,
        seat_147: seat147,
        seat_148: seat148,
        seat_149: seat149,
        seat_150: seat150,
        seat_151: seat151,
        seat_152: seat152,
        seat_153: seat153,
        seat_154: seat154,
        seat_155: seat155,
        seat_156: seat156,
        seat_157: seat157,
        seat_158: seat158,
        seat_159: seat159,
        seat_160: seat160,
        seat_161: seat161,
        seat_162: seat162,
        seat_163: seat163,
        seat_164: seat164,
        seat_165: seat165,
        seat_166: seat166,
        seat_167: seat167,
        seat_168: seat168,
        seat_169: seat169,
        seat_170: seat170,
        seat_171: seat171,
        seat_172: seat172,
        seat_173: seat173,
        seat_174: seat174,
        seat_175: seat175,
        seat_176: seat176,
        seat_177: seat177,
        seat_178: seat178,
        seat_179: seat179,
        seat_180: seat180,
        seat_count: seatCount
      }, {
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}` // Assuming the token is stored in localStorage
        }
      }).then(response => {
        window.location.reload();
      }).catch(error => {
        console.error('There was an error making the reservation!', error);
      });
      
  };

  if (!show || !venue) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.title}</h1>
      <img src={show.poster} alt={show.title} />
      <p>Showtime: {new Date(venue.showtime).toLocaleString()}</p>
      <div>
        {seats.map(({ seat, setSeat }, index) => (
          <div
            key={index}
            onClick={() => toggleSeat(seat, setSeat)}
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: seat === 0 ? 'green' : seat === 1 ? 'red' : 'gray',
              display: 'inline-block',
              margin: '5px',
              cursor: seat !== 2 ? 'pointer' : 'not-allowed',
            }}
          ></div>
        ))}
      </div>
      <button onClick={reserveSeats}>Reserve Seats</button>
    </div>
  );
  
};

export default VenueDetail;
