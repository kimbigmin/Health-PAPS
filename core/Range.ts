const range = {
    roundRunning: {
        man: {
            초4: [103, 96, 95, 69, 68, 45, 44, 26],
            초5: [107, 100, 99, 73, 72, 50, 49, 29],
            초6: [112, 104, 103, 78, 77, 54, 53, 32],
            중1: [73, 64, 63, 50, 49, 36, 35, 20],
            중2: [75, 66, 65, 52, 51, 38, 37, 22],
            중3: [79, 68, 67, 54, 53, 40, 39, 24],
            고1: [80, 70, 69, 56, 55, 42, 41, 26],
            고2: [81, 72, 71, 58, 57, 44, 43, 28],
            고3: [82, 74, 73, 60, 59, 46, 45, 30],
        },
        woman: {
            초4: [100, 77, 76, 57, 56, 40, 39, 21],
            초5: [104, 85, 84, 63, 62, 45, 44, 23],
            초6: [112, 93, 92, 69, 68, 50, 49, 25],
            중1: [70, 35, 34, 25, 24, 19, 18, 14],
            중2: [75, 40, 39, 29, 28, 21, 20, 15],
            중3: [79, 45, 44, 33, 32, 23, 22, 16],
            고1: [80, 50, 49, 37, 36, 25, 24, 17],
            고2: [81, 55, 54, 41, 40, 27, 26, 18],
            고3: [82, 55, 54, 41, 40, 27, 26, 18],
        },
    },
    longRunningAndWalking: {
        man: {
            초4: null,
            초5: [268, 281, 282, 324, 325, 409, 410, 479],
            초6: [243, 250, 251, 314, 315, 379, 380, 449],
            중1: [400, 425, 426, 502, 503, 599, 600, 699],
            중2: [380, 416, 417, 487, 488, 583, 584, 679],
            중3: [370, 407, 408, 472, 473, 567, 568, 659],
            고1: [370, 398, 399, 457, 458, 551, 552, 639],
            고2: [370, 389, 390, 442, 443, 535, 536, 619],
            고3: [362, 380, 381, 427, 428, 519, 520, 599],
        },
        woman: {
            초4: null,
            초5: [268, 299, 300, 359, 360, 441, 442, 501],
            초6: [243, 299, 300, 353, 354, 429, 430, 479],
            중1: [355, 379, 380, 442, 443, 517, 518, 608],
            중2: [355, 379, 380, 442, 443, 517, 518, 608],
            중3: [355, 379, 380, 442, 443, 517, 518, 608],
            고1: [365, 379, 380, 442, 443, 517, 518, 608],
            고2: [365, 379, 380, 442, 443, 517, 518, 608],
            고3: [365, 379, 380, 442, 443, 517, 518, 608],
        },
    },
    bendingForward: {
        man: {
            초4: null,
            초5: [18.0, 8.0, 7.9, 5.0, 4.9, 1.0, 0.9, -4.0],
            초6: [18.0, 8.0, 7.9, 5.0, 4.9, 1.0, 0.9, -4.0],
            중1: [25.0, 10.0, 9.9, 6.0, 5.9, 2.0, 1.9, -4.0],
            중2: [25.0, 10.0, 9.9, 7.0, 6.9, 2.0, 1.9, -4.0],
            중3: [25.0, 10.0, 9.9, 7.0, 6.9, 2.6, 2.5, -3.0],
            고1: [28.0, 13.0, 12.9, 9.0, 8.9, 4.0, 3.9, -2.0],
            고2: [28.0, 16.0, 15.9, 11.0, 10.9, 5.0, 4.9, 0.1],
            고3: [28.0, 16.0, 15.9, 11.0, 10.9, 6.0, 5.9, 0.1],
        },
        woman: {
            초4: null,
            초5: [22.0, 10.0, 9.9, 7.0, 6.9, 5.0, 4.9, 1.0],
            초6: [26.0, 14.0, 13.9, 10.0, 9.9, 5.0, 4.9, 2.0],
            중1: [28.0, 15.0, 14.9, 11.0, 10.9, 8.0, 7.9, 2.0],
            중2: [28.0, 15.0, 14.9, 11.0, 10.9, 8.0, 7.9, 2.0],
            중3: [28.0, 16.0, 15.9, 11.0, 10.9, 8.0, 7.9, 2.0],
            고1: [28.0, 16.0, 15.9, 11.0, 10.9, 8.0, 7.9, 2.0],
            고2: [28.0, 17.0, 16.9, 12.0, 11.9, 9.0, 8.9, 5.0],
            고3: [28.0, 17.0, 16.9, 12.0, 11.9, 9.0, 8.9, 5.0],
        },
    },

    pushUps: {
        man: {
            초4: null,
            초5: null,
            초6: null,
            중1: [41, 34, 33, 25, 24, 12, 11, 4],
            중2: [41, 34, 33, 25, 24, 12, 11, 4],
            중3: [41, 34, 33, 25, 24, 14, 13, 4],
            고1: [50, 46, 45, 30, 29, 16, 15, 7],
            고2: [54, 50, 49, 42, 41, 25, 24, 11],
            고3: [62, 56, 55, 46, 45, 30, 29, 17],
        },
        woman: {
            초4: null,
            초5: null,
            초6: null,
            중1: [50, 45, 44, 24, 23, 14, 13, 6],
            중2: [44, 40, 39, 24, 23, 14, 13, 6],
            중3: [44, 40, 39, 24, 23, 14, 13, 6],
            고1: [44, 40, 39, 24, 23, 14, 13, 6],
            고2: [44, 40, 39, 30, 29, 18, 17, 9],
            고3: [44, 40, 39, 30, 29, 18, 17, 9],
        },
    },
    upperBody: {
        man: {
            초4: [120, 80, 79, 40, 39, 22, 21, 7],
            초5: [120, 80, 79, 40, 39, 22, 21, 10],
            초6: [120, 80, 79, 40, 39, 22, 21, 10],
            중1: [130, 90, 89, 55, 54, 33, 32, 14],
            중2: [130, 90, 89, 55, 54, 33, 32, 14],
            중3: [130, 90, 89, 55, 54, 33, 32, 14],
            고1: [130, 90, 89, 60, 59, 35, 34, 15],
            고2: [130, 90, 89, 60, 59, 35, 34, 17],
            고3: [130, 90, 89, 60, 59, 35, 34, 17],
        },
        woman: {
            초4: [90, 60, 59, 29, 28, 18, 17, 6],
            초5: [90, 60, 59, 36, 35, 23, 22, 7],
            초6: [90, 60, 59, 43, 42, 23, 22, 7],
            중1: [62, 58, 57, 43, 42, 22, 21, 7],
            중2: [62, 58, 57, 39, 38, 19, 18, 7],
            중3: [60, 52, 51, 34, 33, 17, 16, 6],
            고1: [50, 40, 39, 30, 29, 13, 12, 4],
            고2: [50, 40, 39, 30, 29, 13, 12, 4],
            고3: [50, 40, 39, 30, 29, 13, 12, 4],
        },
    },
    grip: {
        man: {
            초4: [36.0, 31.0, 30.9, 18.5, 18.4, 15.0, 14.9, 11.5],
            초5: [37.0, 31.0, 30.9, 23.0, 22.9, 17.0, 16.9, 12.5],
            초6: [39.4, 35.0, 34.9, 26.5, 26.4, 19.0, 18.9, 15.0],
            중1: [46.0, 42.0, 41.9, 30.0, 29.9, 22.5, 22.4, 16.5],
            중2: [47.0, 44.5, 44.4, 37.0, 36.9, 28.5, 28.4, 22.0],
            중3: [50.0, 48.5, 48.4, 40.5, 40.4, 33.0, 32.9, 25.0],
            고1: [62.5, 61.0, 60.9, 42.5, 42.4, 35.5, 35.4, 29.0],
            고2: [65.0, 61.0, 60.9, 46.0, 45.9, 39.0, 38.9, 31.0],
            고3: [68.4, 63.5, 63.4, 46.0, 45.9, 39.0, 38.9, 31.0],
        },
        woman: {
            초4: [33.6, 29.0, 28.9, 18.0, 17.9, 13.5, 13.4, 10.5],
            초5: [35.0, 29.0, 28.9, 19.0, 18.9, 15.5, 15.4, 12.0],
            초6: [39.0, 33.0, 32.9, 22.0, 21.9, 19.0, 18.9, 14.0],
            중1: [38.0, 36.0, 35.9, 23.0, 22.9, 19.0, 18.9, 14.0],
            중2: [38.0, 36.0, 35.9, 25.5, 25.4, 19.5, 19.4, 14.0],
            중3: [38.0, 36.0, 35.9, 27.5, 27.4, 19.5, 19.4, 16.0],
            고1: [38.0, 36.0, 35.9, 29.0, 28.9, 23.0, 22.9, 16.5],
            고2: [38.2, 37.5, 37.4, 29.5, 29.4, 25.0, 24.9, 18.0],
            고3: [38.2, 37.5, 37.4, 29.5, 29.4, 25.0, 24.9, 18.0],
        },
    },
    running50m: {
        man: {
            초4: [8.7, 8.8, 8.81, 9.7, 9.71, 10.5, 10.51, 13.2],
            초5: [8.3, 8.5, 8.51, 9.4, 9.41, 10.2, 10.21, 13.2],
            초6: [7.77, 8.1, 8.11, 9.1, 9.11, 10.0, 10.01, 12.5],
            중1: [7.4, 7.5, 7.51, 8.4, 8.41, 9.3, 9.31, 11.5],
            중2: [7.11, 7.3, 7.31, 8.2, 8.21, 9.0, 9.01, 11.5],
            중3: [6.8, 7.0, 7.01, 7.8, 7.81, 8.5, 8.51, 11.0],
            고1: [6.8, 7.0, 7.01, 7.6, 7.61, 8.1, 8.11, 10.0],
            고2: [6.5, 6.7, 6.71, 7.5, 7.51, 7.9, 7.91, 9.5],
            고3: [6.4, 6.7, 6.71, 7.5, 7.51, 7.9, 7.91, 8.7],
        },
        woman: {
            초4: [9.3, 9.4, 9.41, 10.4, 10.41, 11.0, 11.01, 13.3],
            초5: [8.73, 8.9, 8.91, 9.9, 9.91, 10.7, 10.71, 13.3],
            초6: [8.66, 8.9, 8.91, 9.8, 9.81, 10.7, 10.71, 12.9],
            중1: [8.6, 8.8, 8.81, 9.8, 9.81, 10.5, 10.51, 12.2],
            중2: [8.6, 8.8, 8.81, 9.8, 9.81, 10.5, 10.51, 12.2],
            중3: [8.6, 8.8, 8.81, 9.8, 9.81, 10.5, 10.51, 12.2],
            고1: [8.6, 8.8, 8.81, 9.8, 9.81, 10.5, 10.51, 12.2],
            고2: [8.6, 8.8, 8.81, 9.5, 9.51, 10.5, 10.51, 12.2],
            고3: [8.6, 8.8, 8.81, 9.5, 9.51, 10.5, 10.51, 12.2],
        },
    },
    longJump: {
        man: {
            초4: [179.4, 170.1, 170, 149.1, 149, 130.1, 130, 100.1],
            초5: [187.4, 180.1, 180, 159.1, 159, 141.1, 141, 111.1],
            초6: [204.7, 200.1, 200, 167.1, 167, 148.1, 148, 122.1],
            중1: [219.7, 211.1, 211, 177.1, 177, 159.1, 159, 131.1],
            중2: [229.3, 218.1, 218, 187.1, 187, 169.1, 169, 136.1],
            중3: [244.0, 238.1, 238, 201.1, 201, 180.1, 180, 145.1],
            고1: [260.2, 255.1, 255, 216.1, 216, 195.1, 195, 160.1],
            고2: [270.0, 258.1, 258, 228.1, 228, 212.1, 212, 177.1],
            고3: [277.1, 264.1, 264, 243.1, 243, 221.1, 221, 185.1],
        },
        woman: {
            초4: [165.5, 161.1, 161, 135.1, 135, 119.1, 119, 97.1],
            초5: [175.0, 170.1, 170, 139.1, 139, 123.1, 123, 100.1],
            초6: [177.8, 175.1, 175, 144.1, 144, 127.1, 127, 100.1],
            중1: [180.5, 175.1, 175, 144.1, 144, 127.1, 127, 100.1],
            중2: [198.0, 183.1, 183, 145.1, 145, 127.1, 127, 100.1],
            중3: [198.0, 183.1, 183, 145.1, 145, 127.1, 127, 100.1],
            고1: [200.0, 186.1, 186, 159.1, 159, 139.1, 139, 100.1],
            고2: [200.0, 186.1, 186, 159.1, 159, 139.1, 139, 100.1],
            고3: [200.0, 186.1, 186, 159.1, 159, 139.1, 139, 100.1],
        },
    },
};

export default range;
