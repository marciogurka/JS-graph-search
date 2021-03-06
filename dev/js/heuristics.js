var heuristics = [];

function populateHeuristicsVector(node1, node2, cost) {
    var obj1 = {
        node1: node1,
        node2: node2,
        cost: cost
    };
    var obj2 = {
        node1: node2,
        node2: node1,
        cost: cost
    };
    heuristics.push(obj1);
    heuristics.push(obj2);
}

function createHeuristics() {

    populateHeuristicsVector(n14, n1, 201);
    populateHeuristicsVector(n14, n2, 1680);
    populateHeuristicsVector(n14, n3, 1439);
    populateHeuristicsVector(n14, n4, 3089);
    populateHeuristicsVector(n14, n5, 1485);
    populateHeuristicsVector(n14, n6, 2352);
    populateHeuristicsVector(n14, n7, 2302);
    populateHeuristicsVector(n14, n8, 2259);
    populateHeuristicsVector(n14, n9, 2402);
    populateHeuristicsVector(n14, n10, 730);
    populateHeuristicsVector(n14, n11, 1656);
    populateHeuristicsVector(n14, n12, 299);
    populateHeuristicsVector(n14, n13, 2009);
    populateHeuristicsVector(n14, n14, 0);

    populateHeuristicsVector(n15, n1, 2673);
    populateHeuristicsVector(n15, n2, 1292);
    populateHeuristicsVector(n15, n3, 2556);
    populateHeuristicsVector(n15, n4, 661);
    populateHeuristicsVector(n15, n5, 1932);
    populateHeuristicsVector(n15, n6, 2013);
    populateHeuristicsVector(n15, n7, 1453);
    populateHeuristicsVector(n15, n8, 2734);
    populateHeuristicsVector(n15, n9, 2981);
    populateHeuristicsVector(n15, n10, 2383);
    populateHeuristicsVector(n15, n11, 1912);
    populateHeuristicsVector(n15, n12, 2819);
    populateHeuristicsVector(n15, n13, 1054);
    populateHeuristicsVector(n15, n14, 2778);
    populateHeuristicsVector(n15, n15, 0);

    populateHeuristicsVector(n16, n1, 604);
    populateHeuristicsVector(n16, n2, 1550);
    populateHeuristicsVector(n16, n3, 1831);
    populateHeuristicsVector(n16, n4, 2983);
    populateHeuristicsVector(n16, n5, 1775);
    populateHeuristicsVector(n16, n6, 2654);
    populateHeuristicsVector(n16, n7, 2524);
    populateHeuristicsVector(n16, n8, 2645);
    populateHeuristicsVector(n16, n9, 2802);
    populateHeuristicsVector(n16, n10, 435);
    populateHeuristicsVector(n16, n11, 1948);
    populateHeuristicsVector(n16, n12, 151);
    populateHeuristicsVector(n16, n13, 1874);
    populateHeuristicsVector(n16, n14, 434);
    populateHeuristicsVector(n16, n15, 2765);
    populateHeuristicsVector(n16, n16, 0);

    populateHeuristicsVector(n17, n1, 1235);
    populateHeuristicsVector(n17, n2, 973);
    populateHeuristicsVector(n17, n3, 1178);
    populateHeuristicsVector(n17, n4, 1988);
    populateHeuristicsVector(n17, n5, 620);
    populateHeuristicsVector(n17, n6, 1320);
    populateHeuristicsVector(n17, n7, 1029);
    populateHeuristicsVector(n17, n8, 1693);
    populateHeuristicsVector(n17, n9, 1931);
    populateHeuristicsVector(n17, n10, 1300);
    populateHeuristicsVector(n17, n11, 724);
    populateHeuristicsVector(n17, n12, 1521);
    populateHeuristicsVector(n17, n13, 1177);
    populateHeuristicsVector(n17, n14, 1383);
    populateHeuristicsVector(n17, n15, 1509);
    populateHeuristicsVector(n17, n16, 1527);
    populateHeuristicsVector(n17, n17, 0);

    populateHeuristicsVector(n18, n1, 2580);
    populateHeuristicsVector(n18, n2, 3188);
    populateHeuristicsVector(n18, n3, 1341);
    populateHeuristicsVector(n18, n4, 3785);
    populateHeuristicsVector(n18, n5, 1619);
    populateHeuristicsVector(n18, n6, 1119);
    populateHeuristicsVector(n18, n7, 1679);
    populateHeuristicsVector(n18, n8, 546);
    populateHeuristicsVector(n18, n9, 376);
    populateHeuristicsVector(n18, n10, 3213);
    populateHeuristicsVector(n18, n11, 1497);
    populateHeuristicsVector(n18, n12, 3066);
    populateHeuristicsVector(n18, n13, 3341);
    populateHeuristicsVector(n18, n14, 2775);
    populateHeuristicsVector(n18, n15, 3132);
    populateHeuristicsVector(n18, n16, 3172);
    populateHeuristicsVector(n18, n17, 2222);
    populateHeuristicsVector(n18, n18, 0);

    populateHeuristicsVector(n19, n1, 2946);
    populateHeuristicsVector(n19, n2, 1886);
    populateHeuristicsVector(n19, n3, 2477);
    populateHeuristicsVector(n19, n4, 1335);
    populateHeuristicsVector(n19, n5, 1900);
    populateHeuristicsVector(n19, n6, 1634);
    populateHeuristicsVector(n19, n7, 1137);
    populateHeuristicsVector(n19, n8, 2412);
    populateHeuristicsVector(n19, n9, 2641);
    populateHeuristicsVector(n19, n10, 2855);
    populateHeuristicsVector(n19, n11, 1813);
    populateHeuristicsVector(n19, n12, 3200);
    populateHeuristicsVector(n19, n13, 1724);
    populateHeuristicsVector(n19, n14, 3090);
    populateHeuristicsVector(n19, n15, 761);
    populateHeuristicsVector(n19, n16, 3179);
    populateHeuristicsVector(n19, n17, 1711);
    populateHeuristicsVector(n19, n18, 2706);
    populateHeuristicsVector(n19, n19, 0);

    populateHeuristicsVector(n20, n1, 398);
    populateHeuristicsVector(n20, n2, 1676);
    populateHeuristicsVector(n20, n3, 1639);
    populateHeuristicsVector(n20, n4, 3103);
    populateHeuristicsVector(n20, n5, 1657);
    populateHeuristicsVector(n20, n6, 2530);
    populateHeuristicsVector(n20, n7, 2452);
    populateHeuristicsVector(n20, n8, 2459);
    populateHeuristicsVector(n20, n9, 2603);
    populateHeuristicsVector(n20, n10, 629);
    populateHeuristicsVector(n20, n11, 1829);
    populateHeuristicsVector(n20, n12, 104);
    populateHeuristicsVector(n20, n13, 2005);
    populateHeuristicsVector(n20, n14, 202);
    populateHeuristicsVector(n20, n15, 2833);
    populateHeuristicsVector(n20, n16, 253);
    populateHeuristicsVector(n20, n17, 1498);
    populateHeuristicsVector(n20, n18, 2977);
    populateHeuristicsVector(n20, n19, 3190);
    populateHeuristicsVector(n20, n20, 0);

    populateHeuristicsVector(n21, n1, 3359);
    populateHeuristicsVector(n21, n2, 2333);
    populateHeuristicsVector(n21, n3, 2786);
    populateHeuristicsVector(n21, n4, 1626);
    populateHeuristicsVector(n21, n5, 2246);
    populateHeuristicsVector(n21, n6, 1827);
    populateHeuristicsVector(n21, n7, 1414);
    populateHeuristicsVector(n21, n8, 2601);
    populateHeuristicsVector(n21, n9, 2809);
    populateHeuristicsVector(n21, n10, 3300);
    populateHeuristicsVector(n21, n11, 2138);
    populateHeuristicsVector(n21, n12, 3632);
    populateHeuristicsVector(n21, n13, 2159);
    populateHeuristicsVector(n21, n14, 3510);
    populateHeuristicsVector(n21, n15, 1149);
    populateHeuristicsVector(n21, n16, 3616);
    populateHeuristicsVector(n21, n17, 2127);
    populateHeuristicsVector(n21, n18, 2814);
    populateHeuristicsVector(n21, n19, 449);
    populateHeuristicsVector(n21, n20, 3618);
    populateHeuristicsVector(n21, n21, 0);

    populateHeuristicsVector(n22, n1, 1482);
    populateHeuristicsVector(n22, n2, 2450);
    populateHeuristicsVector(n22, n3, 339);
    populateHeuristicsVector(n22, n4, 3428);
    populateHeuristicsVector(n22, n5, 933);
    populateHeuristicsVector(n22, n6, 1212);
    populateHeuristicsVector(n22, n7, 1575);
    populateHeuristicsVector(n22, n8, 675);
    populateHeuristicsVector(n22, n9, 748);
    populateHeuristicsVector(n22, n10, 2190);
    populateHeuristicsVector(n22, n11, 936);
    populateHeuristicsVector(n22, n12, 1968);
    populateHeuristicsVector(n22, n13, 2687);
    populateHeuristicsVector(n22, n14, 1671);
    populateHeuristicsVector(n22, n15, 2849);
    populateHeuristicsVector(n22, n16, 2085);
    populateHeuristicsVector(n22, n17, 1512);
    populateHeuristicsVector(n22, n18, 1123);
    populateHeuristicsVector(n22, n19, 2707);
    populateHeuristicsVector(n22, n20, 1874);
    populateHeuristicsVector(n22, n21, 2982);
    populateHeuristicsVector(n22, n22, 0);

    populateHeuristicsVector(n23, n1, 277);
    populateHeuristicsVector(n23, n2, 1687);
    populateHeuristicsVector(n23, n3, 964);
    populateHeuristicsVector(n23, n4, 3009);
    populateHeuristicsVector(n23, n5, 1060);
    populateHeuristicsVector(n23, n6, 1905);
    populateHeuristicsVector(n23, n7, 1915);
    populateHeuristicsVector(n23, n8, 1784);
    populateHeuristicsVector(n23, n9, 1930);
    populateHeuristicsVector(n23, n10, 1028);
    populateHeuristicsVector(n23, n11, 1225);
    populateHeuristicsVector(n23, n12, 763);
    populateHeuristicsVector(n23, n13, 2000);
    populateHeuristicsVector(n23, n14, 475);
    populateHeuristicsVector(n23, n15, 2605);
    populateHeuristicsVector(n23, n16, 875);
    populateHeuristicsVector(n23, n17, 1114);
    populateHeuristicsVector(n23, n18, 2303);
    populateHeuristicsVector(n23, n19, 2808);
    populateHeuristicsVector(n23, n20, 675);
    populateHeuristicsVector(n23, n21, 3206);
    populateHeuristicsVector(n23, n22, 1209);
    populateHeuristicsVector(n23, n23, 0);

    populateHeuristicsVector(n24, n1, 1226);
    populateHeuristicsVector(n24, n2, 481);
    populateHeuristicsVector(n24, n3, 1932);
    populateHeuristicsVector(n24, n4, 1913);
    populateHeuristicsVector(n24, n5, 1524);
    populateHeuristicsVector(n24, n6, 2284);
    populateHeuristicsVector(n24, n7, 1942);
    populateHeuristicsVector(n24, n8, 2599);
    populateHeuristicsVector(n24, n9, 2821);
    populateHeuristicsVector(n24, n10, 652);
    populateHeuristicsVector(n24, n11, 1662);
    populateHeuristicsVector(n24, n12, 1162);
    populateHeuristicsVector(n24, n13, 803);
    populateHeuristicsVector(n24, n14, 1234);
    populateHeuristicsVector(n24, n15, 1746);
    populateHeuristicsVector(n24, n16, 1071);
    populateHeuristicsVector(n24, n17, 964);
    populateHeuristicsVector(n24, n18, 3142);
    populateHeuristicsVector(n24, n19, 2274);
    populateHeuristicsVector(n24, n20, 1209);
    populateHeuristicsVector(n24, n21, 2726);
    populateHeuristicsVector(n24, n22, 2266);
    populateHeuristicsVector(n24, n23, 1323);
    populateHeuristicsVector(n24, n24, 0);

    populateHeuristicsVector(n25, n1, 1731);
    populateHeuristicsVector(n25, n2, 2463);
    populateHeuristicsVector(n25, n3, 489);
    populateHeuristicsVector(n25, n4, 3300);
    populateHeuristicsVector(n25, n5, 873);
    populateHeuristicsVector(n25, n6, 894);
    populateHeuristicsVector(n25, n7, 1326);
    populateHeuristicsVector(n25, n8, 338);
    populateHeuristicsVector(n25, n9, 489);
    populateHeuristicsVector(n25, n10, 2368);
    populateHeuristicsVector(n25, n11, 810);
    populateHeuristicsVector(n25, n12, 2216);
    populateHeuristicsVector(n25, n13, 2664);
    populateHeuristicsVector(n25, n14, 1928);
    populateHeuristicsVector(n25, n15, 2689);
    populateHeuristicsVector(n25, n16, 2320);
    populateHeuristicsVector(n25, n17, 1493);
    populateHeuristicsVector(n25, n18, 852);
    populateHeuristicsVector(n25, n19, 2463);
    populateHeuristicsVector(n25, n20, 2128);
    populateHeuristicsVector(n25, n21, 2704);
    populateHeuristicsVector(n25, n22, 357);
    populateHeuristicsVector(n25, n23, 1453);
    populateHeuristicsVector(n25, n24, 2348);
    populateHeuristicsVector(n25, n25, 0);

    populateHeuristicsVector(n26, n1, 903);
    populateHeuristicsVector(n26, n2, 750);
    populateHeuristicsVector(n26, n3, 1652);
    populateHeuristicsVector(n26, n4, 2169);
    populateHeuristicsVector(n26, n5, 1313);
    populateHeuristicsVector(n26, n6, 2132);
    populateHeuristicsVector(n26, n7, 1862);
    populateHeuristicsVector(n26, n8, 2362);
    populateHeuristicsVector(n26, n9, 2573);
    populateHeuristicsVector(n26, n10, 495);
    populateHeuristicsVector(n26, n11, 1467);
    populateHeuristicsVector(n26, n12, 905);
    populateHeuristicsVector(n26, n13, 1079);
    populateHeuristicsVector(n26, n14, 929);
    populateHeuristicsVector(n26, n15, 1921);
    populateHeuristicsVector(n26, n16, 843);
    populateHeuristicsVector(n26, n17, 835);
    populateHeuristicsVector(n26, n18, 2909);
    populateHeuristicsVector(n26, n19, 2362);
    populateHeuristicsVector(n26, n20, 934);
    populateHeuristicsVector(n26, n21, 2806);
    populateHeuristicsVector(n26, n22, 1979);
    populateHeuristicsVector(n26, n23, 994);
    populateHeuristicsVector(n26, n24, 329);
    populateHeuristicsVector(n26, n25, 2091);
    populateHeuristicsVector(n26, n26, 0);

    populateHeuristicsVector(n27, n1, 1102);
    populateHeuristicsVector(n27, n2, 2275);
    populateHeuristicsVector(n27, n3, 378);
    populateHeuristicsVector(n27, n4, 3394);
    populateHeuristicsVector(n27, n5, 947);
    populateHeuristicsVector(n27, n6, 1490);
    populateHeuristicsVector(n27, n7, 1745);
    populateHeuristicsVector(n27, n8, 1076);
    populateHeuristicsVector(n27, n9, 1160);
    populateHeuristicsVector(n27, n10, 1855);
    populateHeuristicsVector(n27, n11, 1022);
    populateHeuristicsVector(n27, n12, 1581);
    populateHeuristicsVector(n27, n13, 2545);
    populateHeuristicsVector(n27, n14, 1282);
    populateHeuristicsVector(n27, n15, 2865);
    populateHeuristicsVector(n27, n16, 1706);
    populateHeuristicsVector(n27, n17, 1413);
    populateHeuristicsVector(n27, n18, 1536);
    populateHeuristicsVector(n27, n19, 2835);
    populateHeuristicsVector(n27, n20, 1483);
    populateHeuristicsVector(n27, n21, 3156);
    populateHeuristicsVector(n27, n22, 412);
    populateHeuristicsVector(n27, n23, 839);
    populateHeuristicsVector(n27, n24, 2023);
    populateHeuristicsVector(n27, n25, 741);
    populateHeuristicsVector(n27, n26, 1713);
    populateHeuristicsVector(n27, n27, 0);

    populateHeuristicsVector(n13, n1, 1967);
    populateHeuristicsVector(n13, n2, 329);
    populateHeuristicsVector(n13, n3, 2349);
    populateHeuristicsVector(n13, n4, 1110);
    populateHeuristicsVector(n13, n5, 1791);
    populateHeuristicsVector(n13, n6, 2309);
    populateHeuristicsVector(n13, n7, 1822);
    populateHeuristicsVector(n13, n8, 2836);
    populateHeuristicsVector(n13, n9, 3082);
    populateHeuristicsVector(n13, n10, 1451);
    populateHeuristicsVector(n13, n11, 1868);
    populateHeuristicsVector(n13, n12, 1964);
    populateHeuristicsVector(n13, n13, 0);

    populateHeuristicsVector(n12, n1, 486);
    populateHeuristicsVector(n12, n2, 1636);
    populateHeuristicsVector(n12, n3, 1726);
    populateHeuristicsVector(n12, n4, 3067);
    populateHeuristicsVector(n12, n5, 1716);
    populateHeuristicsVector(n12, n6, 2593);
    populateHeuristicsVector(n12, n7, 2495);
    populateHeuristicsVector(n12, n8, 2545);
    populateHeuristicsVector(n12, n9, 2693);
    populateHeuristicsVector(n12, n10, 555);
    populateHeuristicsVector(n12, n11, 1889);
    populateHeuristicsVector(n12, n12, 0);

    populateHeuristicsVector(n11, n1, 1461);
    populateHeuristicsVector(n11, n2, 1693);
    populateHeuristicsVector(n11, n3, 666);
    populateHeuristicsVector(n11, n4, 2503);
    populateHeuristicsVector(n11, n5, 173);
    populateHeuristicsVector(n11, n6, 705);
    populateHeuristicsVector(n11, n7, 740);
    populateHeuristicsVector(n11, n8, 972);
    populateHeuristicsVector(n11, n9, 1215);
    populateHeuristicsVector(n11, n10, 1854);
    populateHeuristicsVector(n11, n11, 0);

    populateHeuristicsVector(n10, n1, 815);
    populateHeuristicsVector(n10, n2, 1133);
    populateHeuristicsVector(n10, n3, 1893);
    populateHeuristicsVector(n10, n4, 2562);
    populateHeuristicsVector(n10, n5, 1687);
    populateHeuristicsVector(n10, n6, 2547);
    populateHeuristicsVector(n10, n7, 2329);
    populateHeuristicsVector(n10, n8, 2670);
    populateHeuristicsVector(n10, n9, 2857);
    populateHeuristicsVector(n10, n10, 0);

    populateHeuristicsVector(n9, n1, 2207);
    populateHeuristicsVector(n9, n2, 2904);
    populateHeuristicsVector(n9, n3, 973);
    populateHeuristicsVector(n9, n4, 3620);
    populateHeuristicsVector(n9, n5, 1314);
    populateHeuristicsVector(n9, n6, 1007);
    populateHeuristicsVector(n9, n7, 1543);
    populateHeuristicsVector(n9, n8, 251);
    populateHeuristicsVector(n9, n9, 0);

    populateHeuristicsVector(n8, n1, 2061);
    populateHeuristicsVector(n8, n2, 2665);
    populateHeuristicsVector(n8, n3, 820);
    populateHeuristicsVector(n8, n4, 3370);
    populateHeuristicsVector(n8, n5, 1081);
    populateHeuristicsVector(n8, n6, 780);
    populateHeuristicsVector(n8, n7, 1302);
    populateHeuristicsVector(n8, n8, 0);

    populateHeuristicsVector(n7, n1, 2121);
    populateHeuristicsVector(n7, n2, 1778);
    populateHeuristicsVector(n7, n3, 1372);
    populateHeuristicsVector(n7, n4, 2107);
    populateHeuristicsVector(n7, n5, 873);
    populateHeuristicsVector(n7, n6, 559);
    populateHeuristicsVector(n7, n7, 0);

    populateHeuristicsVector(n6, n1, 2155);
    populateHeuristicsVector(n6, n2, 2212);
    populateHeuristicsVector(n6, n3, 1118);
    populateHeuristicsVector(n6, n4, 2667);
    populateHeuristicsVector(n6, n5, 878);
    populateHeuristicsVector(n6, n6, 0);

    populateHeuristicsVector(n5, n1, 1292);
    populateHeuristicsVector(n5, n2, 1592);
    populateHeuristicsVector(n5, n3, 624);
    populateHeuristicsVector(n5, n4, 2496);
    populateHeuristicsVector(n5, n5, 0);

    populateHeuristicsVector(n4, n1, 3022);
    populateHeuristicsVector(n4, n2, 1432);
    populateHeuristicsVector(n4, n3, 3117);
    populateHeuristicsVector(n4, n4, 0);

    populateHeuristicsVector(n3, n1, 1248);
    populateHeuristicsVector(n3, n2, 2111);
    populateHeuristicsVector(n3, n3, 0);

    populateHeuristicsVector(n2, n1, 1641);
    populateHeuristicsVector(n2, n2, 0);

    populateHeuristicsVector(n1, n1, 0);

    populateHeuristicsVector(n1, n14, 201);
    populateHeuristicsVector(n2, n14, 1680);
    populateHeuristicsVector(n3, n14, 1439);
    populateHeuristicsVector(n4, n14, 3089);
    populateHeuristicsVector(n5, n14, 1485);
    populateHeuristicsVector(n6, n14, 2352);
    populateHeuristicsVector(n7, n14, 2302);
    populateHeuristicsVector(n8, n14, 2259);
    populateHeuristicsVector(n9, n14, 2402);
    populateHeuristicsVector(n10, n14, 730);
    populateHeuristicsVector(n11, n14, 1656);
    populateHeuristicsVector(n12, n14, 299);
    populateHeuristicsVector(n13, n14, 2009);
    populateHeuristicsVector(n14, n14, 0);

    populateHeuristicsVector(n1, n15, 2673);
    populateHeuristicsVector(n2, n15, 1292);
    populateHeuristicsVector(n3, n15, 2556);
    populateHeuristicsVector(n4, n15, 661);
    populateHeuristicsVector(n5, n15, 1932);
    populateHeuristicsVector(n6, n15, 2013);
    populateHeuristicsVector(n7, n15, 1453);
    populateHeuristicsVector(n8, n15, 2734);
    populateHeuristicsVector(n9, n15, 2981);
    populateHeuristicsVector(n10, n15, 2383);
    populateHeuristicsVector(n11, n15, 1912);
    populateHeuristicsVector(n12, n15, 2819);
    populateHeuristicsVector(n13, n15, 1054);
    populateHeuristicsVector(n14, n15, 2778);
    populateHeuristicsVector(n15, n15, 0);

    populateHeuristicsVector(n1, n16, 604);
    populateHeuristicsVector(n2, n16, 1550);
    populateHeuristicsVector(n3, n16, 1831);
    populateHeuristicsVector(n4, n16, 2983);
    populateHeuristicsVector(n5, n16, 1775);
    populateHeuristicsVector(n6, n16, 2654);
    populateHeuristicsVector(n7, n16, 2524);
    populateHeuristicsVector(n8, n16, 2645);
    populateHeuristicsVector(n9, n16, 2802);
    populateHeuristicsVector(n10, n16, 435);
    populateHeuristicsVector(n11, n16, 1948);
    populateHeuristicsVector(n12, n16, 151);
    populateHeuristicsVector(n13, n16, 1874);
    populateHeuristicsVector(n14, n16, 434);
    populateHeuristicsVector(n15, n16, 2765);
    populateHeuristicsVector(n16, n16, 0);

    populateHeuristicsVector(n1, n17, 1235);
    populateHeuristicsVector(n2, n17, 973);
    populateHeuristicsVector(n3, n17, 1178);
    populateHeuristicsVector(n4, n17, 1988);
    populateHeuristicsVector(n5, n17, 620);
    populateHeuristicsVector(n6, n17, 1320);
    populateHeuristicsVector(n7, n17, 1029);
    populateHeuristicsVector(n8, n17, 1693);
    populateHeuristicsVector(n9, n17, 1931);
    populateHeuristicsVector(n10, n17, 1300);
    populateHeuristicsVector(n11, n17, 724);
    populateHeuristicsVector(n12, n17, 1521);
    populateHeuristicsVector(n13, n17, 1177);
    populateHeuristicsVector(n14, n17, 1383);
    populateHeuristicsVector(n15, n17, 1509);
    populateHeuristicsVector(n16, n17, 1527);
    populateHeuristicsVector(n17, n17, 0);

    populateHeuristicsVector(n1, n18, 2580);
    populateHeuristicsVector(n2, n18, 3188);
    populateHeuristicsVector(n3, n18, 1341);
    populateHeuristicsVector(n4, n18, 3785);
    populateHeuristicsVector(n5, n18, 1619);
    populateHeuristicsVector(n6, n18, 1119);
    populateHeuristicsVector(n7, n18, 1679);
    populateHeuristicsVector(n8, n18, 546);
    populateHeuristicsVector(n9, n18, 376);
    populateHeuristicsVector(n10, n18, 3213);
    populateHeuristicsVector(n11, n18, 1497);
    populateHeuristicsVector(n12, n18, 3066);
    populateHeuristicsVector(n13, n18, 3341);
    populateHeuristicsVector(n14, n18, 2775);
    populateHeuristicsVector(n15, n18, 3132);
    populateHeuristicsVector(n16, n18, 3172);
    populateHeuristicsVector(n17, n18, 2222);
    populateHeuristicsVector(n18, n18, 0);

    populateHeuristicsVector(n1, n19, 2946);
    populateHeuristicsVector(n2, n19, 1886);
    populateHeuristicsVector(n3, n19, 2477);
    populateHeuristicsVector(n4, n19, 1335);
    populateHeuristicsVector(n5, n19, 1900);
    populateHeuristicsVector(n6, n19, 1634);
    populateHeuristicsVector(n7, n19, 1137);
    populateHeuristicsVector(n8, n19, 2412);
    populateHeuristicsVector(n9, n19, 2641);
    populateHeuristicsVector(n10, n19, 2855);
    populateHeuristicsVector(n11, n19, 1813);
    populateHeuristicsVector(n12, n19, 3200);
    populateHeuristicsVector(n13, n19, 1724);
    populateHeuristicsVector(n14, n19, 3090);
    populateHeuristicsVector(n15, n19, 761);
    populateHeuristicsVector(n16, n19, 3179);
    populateHeuristicsVector(n17, n19, 1711);
    populateHeuristicsVector(n18, n19, 2706);
    populateHeuristicsVector(n19, n19, 0);

    populateHeuristicsVector(n1, n20, 398);
    populateHeuristicsVector(n2, n20, 1676);
    populateHeuristicsVector(n3, n20, 1639);
    populateHeuristicsVector(n4, n20, 3103);
    populateHeuristicsVector(n5, n20, 1657);
    populateHeuristicsVector(n6, n20, 2530);
    populateHeuristicsVector(n7, n20, 2452);
    populateHeuristicsVector(n8, n20, 2459);
    populateHeuristicsVector(n9, n20, 2603);
    populateHeuristicsVector(n10, n20, 629);
    populateHeuristicsVector(n11, n20, 1829);
    populateHeuristicsVector(n12, n20, 104);
    populateHeuristicsVector(n13, n20, 2005);
    populateHeuristicsVector(n14, n20, 202);
    populateHeuristicsVector(n15, n20, 2833);
    populateHeuristicsVector(n16, n20, 253);
    populateHeuristicsVector(n17, n20, 1498);
    populateHeuristicsVector(n18, n20, 2977);
    populateHeuristicsVector(n19, n20, 3190);
    populateHeuristicsVector(n20, n20, 0);

    populateHeuristicsVector(n1, n21, 3359);
    populateHeuristicsVector(n2, n21, 2333);
    populateHeuristicsVector(n3, n21, 2786);
    populateHeuristicsVector(n4, n21, 1626);
    populateHeuristicsVector(n5, n21, 2246);
    populateHeuristicsVector(n6, n21, 1827);
    populateHeuristicsVector(n7, n21, 1414);
    populateHeuristicsVector(n8, n21, 2601);
    populateHeuristicsVector(n9, n21, 2809);
    populateHeuristicsVector(n10, n21, 3300);
    populateHeuristicsVector(n11, n21, 2138);
    populateHeuristicsVector(n12, n21, 3632);
    populateHeuristicsVector(n13, n21, 2159);
    populateHeuristicsVector(n14, n21, 3510);
    populateHeuristicsVector(n15, n21, 1149);
    populateHeuristicsVector(n16, n21, 3616);
    populateHeuristicsVector(n17, n21, 2127);
    populateHeuristicsVector(n18, n21, 2814);
    populateHeuristicsVector(n19, n21, 449);
    populateHeuristicsVector(n20, n21, 3618);
    populateHeuristicsVector(n21, n21, 0);

    populateHeuristicsVector(n1, n22, 1482);
    populateHeuristicsVector(n2, n22, 2450);
    populateHeuristicsVector(n3, n22, 339);
    populateHeuristicsVector(n4, n22, 3428);
    populateHeuristicsVector(n5, n22, 933);
    populateHeuristicsVector(n6, n22, 1212);
    populateHeuristicsVector(n7, n22, 1575);
    populateHeuristicsVector(n8, n22, 675);
    populateHeuristicsVector(n9, n22, 748);
    populateHeuristicsVector(n10, n22, 2190);
    populateHeuristicsVector(n11, n22, 936);
    populateHeuristicsVector(n12, n22, 1968);
    populateHeuristicsVector(n13, n22, 2687);
    populateHeuristicsVector(n14, n22, 1671);
    populateHeuristicsVector(n15, n22, 2849);
    populateHeuristicsVector(n16, n22, 2085);
    populateHeuristicsVector(n17, n22, 1512);
    populateHeuristicsVector(n18, n22, 1123);
    populateHeuristicsVector(n19, n22, 2707);
    populateHeuristicsVector(n20, n22, 1874);
    populateHeuristicsVector(n21, n22, 2982);
    populateHeuristicsVector(n22, n22, 0);

    populateHeuristicsVector(n1, n23, 277);
    populateHeuristicsVector(n2, n23, 1687);
    populateHeuristicsVector(n3, n23, 964);
    populateHeuristicsVector(n4, n23, 3009);
    populateHeuristicsVector(n5, n23, 1060);
    populateHeuristicsVector(n6, n23, 1905);
    populateHeuristicsVector(n7, n23, 1915);
    populateHeuristicsVector(n8, n23, 1784);
    populateHeuristicsVector(n9, n23, 1930);
    populateHeuristicsVector(n10, n23, 1028);
    populateHeuristicsVector(n11, n23, 1225);
    populateHeuristicsVector(n12, n23, 763);
    populateHeuristicsVector(n13, n23, 2000);
    populateHeuristicsVector(n14, n23, 475);
    populateHeuristicsVector(n15, n23, 2605);
    populateHeuristicsVector(n16, n23, 875);
    populateHeuristicsVector(n17, n23, 1114);
    populateHeuristicsVector(n18, n23, 2303);
    populateHeuristicsVector(n19, n23, 2808);
    populateHeuristicsVector(n20, n23, 675);
    populateHeuristicsVector(n21, n23, 3206);
    populateHeuristicsVector(n22, n23, 1209);
    populateHeuristicsVector(n23, n23, 0);

    populateHeuristicsVector(n1, n24, 1226);
    populateHeuristicsVector(n2, n24, 481);
    populateHeuristicsVector(n3, n24, 1932);
    populateHeuristicsVector(n4, n24, 1913);
    populateHeuristicsVector(n5, n24, 1524);
    populateHeuristicsVector(n6, n24, 2284);
    populateHeuristicsVector(n7, n24, 1942);
    populateHeuristicsVector(n8, n24, 2599);
    populateHeuristicsVector(n9, n24, 2821);
    populateHeuristicsVector(n10, n24, 652);
    populateHeuristicsVector(n11, n24, 1662);
    populateHeuristicsVector(n12, n24, 1162);
    populateHeuristicsVector(n13, n24, 803);
    populateHeuristicsVector(n14, n24, 1234);
    populateHeuristicsVector(n15, n24, 1746);
    populateHeuristicsVector(n16, n24, 1071);
    populateHeuristicsVector(n17, n24, 964);
    populateHeuristicsVector(n18, n24, 3142);
    populateHeuristicsVector(n19, n24, 2274);
    populateHeuristicsVector(n20, n24, 1209);
    populateHeuristicsVector(n21, n24, 2726);
    populateHeuristicsVector(n22, n24, 2266);
    populateHeuristicsVector(n23, n24, 1323);
    populateHeuristicsVector(n24, n24, 0);

    populateHeuristicsVector(n1, n25, 1731);
    populateHeuristicsVector(n2, n25, 2463);
    populateHeuristicsVector(n3, n25, 489);
    populateHeuristicsVector(n4, n25, 3300);
    populateHeuristicsVector(n5, n25, 873);
    populateHeuristicsVector(n6, n25, 894);
    populateHeuristicsVector(n7, n25, 1326);
    populateHeuristicsVector(n8, n25, 338);
    populateHeuristicsVector(n9, n25, 489);
    populateHeuristicsVector(n10, n25, 2368);
    populateHeuristicsVector(n11, n25, 810);
    populateHeuristicsVector(n12, n25, 2216);
    populateHeuristicsVector(n13, n25, 2664);
    populateHeuristicsVector(n14, n25, 1928);
    populateHeuristicsVector(n15, n25, 2689);
    populateHeuristicsVector(n16, n25, 2320);
    populateHeuristicsVector(n17, n25, 1493);
    populateHeuristicsVector(n18, n25, 852);
    populateHeuristicsVector(n19, n25, 2463);
    populateHeuristicsVector(n20, n25, 2128);
    populateHeuristicsVector(n21, n25, 2704);
    populateHeuristicsVector(n22, n25, 357);
    populateHeuristicsVector(n23, n25, 1453);
    populateHeuristicsVector(n24, n25, 2348);
    populateHeuristicsVector(n25, n25, 0);

    populateHeuristicsVector(n1, n26, 903);
    populateHeuristicsVector(n2, n26, 750);
    populateHeuristicsVector(n3, n26, 1652);
    populateHeuristicsVector(n4, n26, 2169);
    populateHeuristicsVector(n5, n26, 1313);
    populateHeuristicsVector(n6, n26, 2132);
    populateHeuristicsVector(n7, n26, 1862);
    populateHeuristicsVector(n8, n26, 2362);
    populateHeuristicsVector(n9, n26, 2573);
    populateHeuristicsVector(n10, n26, 495);
    populateHeuristicsVector(n11, n26, 1467);
    populateHeuristicsVector(n12, n26, 905);
    populateHeuristicsVector(n13, n26, 1079);
    populateHeuristicsVector(n14, n26, 929);
    populateHeuristicsVector(n15, n26, 1921);
    populateHeuristicsVector(n16, n26, 843);
    populateHeuristicsVector(n17, n26, 835);
    populateHeuristicsVector(n18, n26, 2909);
    populateHeuristicsVector(n19, n26, 2362);
    populateHeuristicsVector(n20, n26, 934);
    populateHeuristicsVector(n21, n26, 2806);
    populateHeuristicsVector(n22, n26, 1979);
    populateHeuristicsVector(n23, n26, 994);
    populateHeuristicsVector(n24, n26, 329);
    populateHeuristicsVector(n25, n26, 2091);
    populateHeuristicsVector(n26, n26, 0);

    populateHeuristicsVector(n1, n27, 1102);
    populateHeuristicsVector(n2, n27, 2275);
    populateHeuristicsVector(n3, n27, 378);
    populateHeuristicsVector(n4, n27, 3394);
    populateHeuristicsVector(n5, n27, 947);
    populateHeuristicsVector(n6, n27, 1490);
    populateHeuristicsVector(n7, n27, 1745);
    populateHeuristicsVector(n8, n27, 1076);
    populateHeuristicsVector(n9, n27, 1160);
    populateHeuristicsVector(n10, n27, 1855);
    populateHeuristicsVector(n11, n27, 1022);
    populateHeuristicsVector(n12, n27, 1581);
    populateHeuristicsVector(n13, n27, 2545);
    populateHeuristicsVector(n14, n27, 1282);
    populateHeuristicsVector(n15, n27, 2865);
    populateHeuristicsVector(n16, n27, 1706);
    populateHeuristicsVector(n17, n27, 1413);
    populateHeuristicsVector(n18, n27, 1536);
    populateHeuristicsVector(n19, n27, 2835);
    populateHeuristicsVector(n20, n27, 1483);
    populateHeuristicsVector(n21, n27, 3156);
    populateHeuristicsVector(n22, n27, 412);
    populateHeuristicsVector(n23, n27, 839);
    populateHeuristicsVector(n24, n27, 2023);
    populateHeuristicsVector(n25, n27, 741);
    populateHeuristicsVector(n26, n27, 1713);
    populateHeuristicsVector(n27, n27, 0);

    populateHeuristicsVector(n1, n13, 1967);
    populateHeuristicsVector(n2, n13, 329);
    populateHeuristicsVector(n3, n13, 2349);
    populateHeuristicsVector(n4, n13, 1110);
    populateHeuristicsVector(n5, n13, 1791);
    populateHeuristicsVector(n6, n13, 2309);
    populateHeuristicsVector(n7, n13, 1822);
    populateHeuristicsVector(n8, n13, 2836);
    populateHeuristicsVector(n9, n13, 3082);
    populateHeuristicsVector(n10, n13, 1451);
    populateHeuristicsVector(n11, n13, 1868);
    populateHeuristicsVector(n12, n13, 1964);
    populateHeuristicsVector(n13, n13, 0);

    populateHeuristicsVector(n1, n12, 486);
    populateHeuristicsVector(n2, n12, 1636);
    populateHeuristicsVector(n3, n12, 1726);
    populateHeuristicsVector(n4, n12, 3067);
    populateHeuristicsVector(n5, n12, 1716);
    populateHeuristicsVector(n6, n12, 2593);
    populateHeuristicsVector(n7, n12, 2495);
    populateHeuristicsVector(n8, n12, 2545);
    populateHeuristicsVector(n9, n12, 2693);
    populateHeuristicsVector(n10, n12, 555);
    populateHeuristicsVector(n11, n12, 1889);
    populateHeuristicsVector(n12, n12, 0);

    populateHeuristicsVector(n1, n11, 1461);
    populateHeuristicsVector(n2, n11, 1693);
    populateHeuristicsVector(n3, n11, 666);
    populateHeuristicsVector(n4, n11, 2503);
    populateHeuristicsVector(n5, n11, 173);
    populateHeuristicsVector(n6, n11, 705);
    populateHeuristicsVector(n7, n11, 740);
    populateHeuristicsVector(n8, n11, 972);
    populateHeuristicsVector(n9, n11, 1215);
    populateHeuristicsVector(n10, n11, 1854);
    populateHeuristicsVector(n11, n11, 0);

    populateHeuristicsVector(n1, n10, 815);
    populateHeuristicsVector(n2, n10, 1133);
    populateHeuristicsVector(n3, n10, 1893);
    populateHeuristicsVector(n4, n10, 2562);
    populateHeuristicsVector(n5, n10, 1687);
    populateHeuristicsVector(n6, n10, 2547);
    populateHeuristicsVector(n7, n10, 2329);
    populateHeuristicsVector(n8, n10, 2670);
    populateHeuristicsVector(n9, n10, 2857);
    populateHeuristicsVector(n10, n10, 0);

    populateHeuristicsVector(n1, n9, 2207);
    populateHeuristicsVector(n2, n9, 2904);
    populateHeuristicsVector(n3, n9, 973);
    populateHeuristicsVector(n4, n9, 3620);
    populateHeuristicsVector(n5, n9, 1314);
    populateHeuristicsVector(n6, n9, 1007);
    populateHeuristicsVector(n7, n9, 1543);
    populateHeuristicsVector(n8, n9, 251);
    populateHeuristicsVector(n9, n9, 0);

    populateHeuristicsVector(n1, n8, 2061);
    populateHeuristicsVector(n2, n8, 2665);
    populateHeuristicsVector(n3, n8, 820);
    populateHeuristicsVector(n4, n8, 3370);
    populateHeuristicsVector(n5, n8, 1081);
    populateHeuristicsVector(n6, n8, 780);
    populateHeuristicsVector(n7, n8, 1302);
    populateHeuristicsVector(n8, n8, 0);

    populateHeuristicsVector(n1, n7, 2121);
    populateHeuristicsVector(n2, n7, 1778);
    populateHeuristicsVector(n3, n7, 1372);
    populateHeuristicsVector(n4, n7, 2107);
    populateHeuristicsVector(n5, n7, 873);
    populateHeuristicsVector(n6, n7, 559);
    populateHeuristicsVector(n7, n7, 0);

    populateHeuristicsVector(n1, n6, 2155);
    populateHeuristicsVector(n2, n6, 2212);
    populateHeuristicsVector(n3, n6, 1118);
    populateHeuristicsVector(n4, n6, 2667);
    populateHeuristicsVector(n5, n6, 878);
    populateHeuristicsVector(n6, n6, 0);

    populateHeuristicsVector(n1, n5, 1292);
    populateHeuristicsVector(n2, n5, 1592);
    populateHeuristicsVector(n3, n5, 624);
    populateHeuristicsVector(n4, n5, 2496);
    populateHeuristicsVector(n5, n5, 0);

    populateHeuristicsVector(n1, n4, 3022);
    populateHeuristicsVector(n2, n4, 1432);
    populateHeuristicsVector(n3, n4, 3117);
    populateHeuristicsVector(n4, n4, 0);

    populateHeuristicsVector(n1, n3, 1248);
    populateHeuristicsVector(n2, n3, 2111);
    populateHeuristicsVector(n3, n3, 0);

    populateHeuristicsVector(n1, n2, 1641);
    populateHeuristicsVector(n2, n2, 0);

    populateHeuristicsVector(n1, n1, 0);
}

function findHeuristicCost(node1, node2) {
    var search = heuristics.find(function (element) {
        return (element.node1._id === node1._id) && (element.node2._id === node2._id);
    });

    return search.cost;
}