/*
论文信息
publications内有三个数组分别是
jounal_article         期刊
conference_proceedings 会议
book_chapters          书籍
添加论文时按这三类添加到对应数组就行了, 具体格式照抄
手工编写论文id是为了在其它页面引用论文方便, id和作者英文名格式见readme
*/
const BASE = import.meta.env.BASE_URL
const publications = {
    "journal_articles": [
        {
            "id": 2020992,
            "authors": [
                "Wei Huang",
                "Hong-Mei Yan",
                "Chong Wang",
                "Ji-Yi Li",
                "Zhen-Tao Zuo",
                "Jiang Zhang",
                "Zhan Shen"
            ],
            "corresponding_author": [
                "Hua-fu Chen"
            ],
            "title": "Perception-to-Image: Reconstructing Natural Images from the Brain Activity of Visual Perception. Ann Biomed Eng (2020).",
            "appendix": [
                {
                    "name": "pdf",
                    "src": "https://link.springer.com/article/10.1007/s10439-020-02502-3"
                },
                {
                    "name": "data",
                    "src": "https://link.springer.com/article/10.1007/s10439-020-02502-3.ris"
                }
            ]
        },
        {
            "id": 2019992,
            "authors": [
                "Shao-Bing Gao",
                "Ming Zhang",
                "Qian Zhao",
                "Xian-Shi Zhang"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Underwater Image Enhancement using Adaptive Retinal Mechanisms. IEEE Transactions on Image Processing(TIP), 2019.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2019-Gao-TIP2.pdf"
                },
                {
                    "name": "data&results",
                    "src": BASE+"resource/data/ASM-results.zip"
                }
            ]
        },
        {
            "id": 2019982,
            "authors": [
                "Kai-Wen Cheng",
                "Ao-Lin Ding",
                "Lian-Fang Jiang",
                "Han Tian"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Emotion in Chinese words couldn't be extracted in continuous flash suppression. Frontiers in human neuroscience, 13: 309, 2019.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2019-Cheng-Kaiwen-Frontiers-Human-Neurosci.pdf"
                }
            ]
        },
        {
            "id": 2019972,
            "authors": [
                "Kai-Wen Cheng",
                "Ke-Yu Yang",
                "Long Qin",
                "Yi-Xuan Zhuo"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Perceptual load modulates contour integration in conscious and unconscious states. PeerJ, 7: e7550, 2019.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2019-Cheng-Yang-Applied-sciences.pdf"
                }
            ]
        },
        {
            "id": 2019962,
            "authors": [
                "Yang Chen",
                "Ming Zhang",
                "Hong-Mei Yan",
                "Yong-Jie Li"
            ],
            "corresponding_author": [
                "Kai-fu Yang"
            ],
            "title": "A New Ultrasound Speckle Reduction Algorithm Based on Superpixel Segmentation and Detail Compensation. Applied Sciences, 9(8): 1693, 2019.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2019-Cheng-Yang-Applied-sciences.pdf"
                }
            ]
        },
        {
            "id": 2019952,
            "authors": [
                "Tao Deng",
                "Long Qin",
                "Thuyen Ngo",
                "BS Manjunath"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "How Do Drivers Allocate Their Potential Attention? Driving Fixation Prediction via Convolutional Neural Networks. IEEE Transactions on Intelligent Transportation Systems, 2019.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2019-TITS-proof.pdf"
                }
            ]
        },
        {
            "id": 2019942,
            "authors": [
                "Shao-Bing Gao",
                "Ming Zhang"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Improving color constancy by selecting suitable set of training images. Opt. Express, 27: 25611-25633, 2019.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2019-Gao-OE.pdf"
                },
                {
                    "name": "dataset",
                    "src": BASE+"resource/data/SIRMF_results.rar"
                }
            ]
        },
        {
            "id": 2019932,
            "authors": [
                "Shao-Bing Gao",
                "Yan-Ze Ren",
                "Ming Zhang"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Combining bottom-up and top-down visual mechanisms for color constancy under varying illumination. IEEE Transactions on Image Processing(TIP), accepted, 2019.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2019-Gao-TIP.pdf"
                },
                {
                    "name": "data&code",
                    "src": "https://github.com/Shaobinggao/Multi-illuminant-based-color-constancy"
                }
            ]
        },
        {
            "id": 2019922,
            "authors": [
                "Kai-Fu Yang",
                "Hui Li",
                "Hu-Lin Kuang",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "An Adaptive Method for Image Dynamic Range Adjustment. IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), 29 (3)： 640 - 652，2019.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2018-Yang-TCSVT.pdf"
                }
            ]
        },
        {
            "id": 2018992,
            "authors": [
                "Wei Huang",
                "Hong-Mei Yan",
                "Ran Liu",
                "Li-Xia Zhu",
                "Huang-Bin Zhang"
            ],
            "corresponding_author": [
                "Hua-fu Chen"
            ],
            "title": "F-score feature selection based Bayesian reconstruction of visual image from human brain activity. Neurocomputing, 316：202 - 209，2018.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2018-Huang-Wei-Neurocomputing.pdf"
                }
            ]
        },
        {
            "id": 2018982,
            "authors": [
                "Yu-Hong Liu",
                "Hong-Mei Yan",
                "Shao-Bing Gao"
            ],
            "corresponding_author": [
                "Kai-fu Yang"
            ],
            "title": "Criteria to evaluate the fidelity of image enhancement by MSRCR. IET Image Processing, 12(6)： 880 - 887，2018.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2018-Liu-IET-IPR.2017.0171.pdf"
                }
            ]
        },
        {
            "id": 2018972,
            "authors": [
                "Tao Deng"
            ],
            "corresponding_author": [
                "Hong-Mei Yan",
                "Yong-Jie Li"
            ],
            "title": "Learning to Boost Bottom-up Fixation Prediction in Driving Environments via Random Forest. IEEE Transactions on Intelligent Transportation Systems(TITS), 19 (9): 3059-3067, 2018.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Deng-TITS2017.pdf"
                },
                {
                    "name": "dataset",
                    "src": "https://github.com/taodeng/traffic-eye-tracking-dataset"
                }
            ]
        },
        {
            "id": 2018962,
            "authors": [
                "Hu-Lin Kuang",
                "Kai-Fu Yang",
                "Hong Yan"
            ],
            "corresponding_author": [
                "Yong-Jie Li",
                "Leanne Lai Hang Chan"
            ],
            "title": "Bayes Saliency Based Object Proposal Generator for Nighttime Traffic Images. IEEE Transactions on Intelligent Transportation Systems(TITS),19(3): 814-825, 2018.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Deng-TITS2017.pdf"
                }
            ]
        },
        {
            "id": 2017992,
            "authors": [
                "Yang Chen",
                "Hong-Mei Yan"
            ],
            "corresponding_author": [
                "Yan Luo"
            ],
            "title": "Machine-learning-based classification of real-time tissue elastography for hepatic fibrosis in patients with chronic hepatitis B. Computers in biology and medicine, 89：18-23，2017.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2018-Kuang-TITS.pdf"
                }
            ]
        },
        {
            "id": 2017982,
            "authors": [
                "Hong-Wen Cao",
                "Ke-Yu Yang"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Character Decomposition and Transposition Processes of Chinese Compound Words in Rapid Serial Visual Presentation. Frontiers in Psychology, 8 , article 483, p1-6, 2017.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2017-Chen-Yang.pdf"
                }
            ]
        },
        {
            "id": 2017972,
            "authors": [
                "Hu-Lin Kuang",
                "Xian-Shi Zhang",
                "Hong Yan"
            ],
            "corresponding_author": [
                "Yong-Jie Li",
                "Leanne Lai Hang Chan"
            ],
            "title": "Nighttime Vehicle Detection Based on Bio-Inspired Image Enhancement and Weighted Score-Level Feature Fusion. IEEE Trans. Intelligent Transportation Systems(TITS), 18(4)： 927-936, 2017.",
            "appendix": []
        },
        {
            "id": 2017962,
            "authors": [
                "Shao-Bing Gao",
                "Ming Zhang",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Improving Color Constancy by Discounting the Variation of Camera Spectral Sensitivity. Journal of the Optical Society of America A, 34 (8): 1448-1462,2017.",
            "appendix": []
        },
        {
            "id": 2016992,
            "authors": [
                "Hong-Wen Cao",
                "Min Gao"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Character Decomposition and Transposition Processes in Chinese Compound Words Modulates Attentional Blink. Frontiers in Psychology, 2016, June, vol (7) , article 923, p1-8, doi: 10.3389/fpsyg.2016.00923.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/2017-Cao-Frontiers-in-Psych.pdf"
                }
            ]
        },
        {
            "id": 2016982,
            "authors": [
                "Hong-Wen Cao",
                "Kai-Fu Yang"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Character Decomposition and Transposition of Chinese Compound Words in the Right and Left Visual Fields. i-perception, 2016, November-December, p1–16, doi: 10.1177/2041669516675366.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Cao_FP2016.pdf"
                }
            ]
        },
        {
            "id": 2016972,
            "authors": [
                "Cheng Chen",
                "Kai-Bin Jin",
                "Ye-Hua Li"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "The Attentional Dependence of Emotion Cognition is Variable with the Competing Task. Frontiers in Behavioral Neuroscience, 2016, vol.10, Nov, article 219, p1-12, doi: 10.3389/fnbeh.2016.00219.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Chen_FBN2016.pdf"
                }
            ]
        },
        {
            "id": 2016962,
            "authors": [
                "Kai-Fu Yang",
                "Hui Li",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A Unified Framework for Salient Structure Detection by Contour-Guided Visual Search. IEEE Trans. Image Processing (TIP) , 25(8): 3475-3488, 2016.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Yang_TIP2016.pdf"
                },
                {
                    "name": "code",
                    "src": BASE+"resource/data/tip2016/CGVSsalient.rar"
                }
            ]
        },
        {
            "id": 2016952,
            "authors": [
                "Xian-Shi Zhang",
                "Shao-Bing Gao",
                "Ruo-Xuan Li",
                "Xin-Yu Du",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A Retinal Mechanism Inspired Color Constancy Model. IEEE Trans. Image Processing (TIP), 25 (3), 1219-1232, 2016.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Zhang_TIP2016.pdf"
                }
            ]
        },
        {
            "id": 2016942,
            "authors": [
                "Tao Deng",
                "Kai-Fu Yang",
                "Yong-Jie Li"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Where Does the Driver Look? Top-Down Based Saliency Detection in a Traffic Driving Environment. IEEE Transactions on Intelligent Transportation Systems (TITS), 17 (7): 2051-2062, 2016.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Deng_TITS2016.pdf"
                },
                {
                    "name": "github",
                    "src": "https://github.com/taodeng/Top-down-based-traffic-driving-saliency-model"
                }
            ]
        },
        {
            "id": 2015992,
            "authors": [
                "Xian-Shi Zhang",
                "Shao-Bing Gao",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A Retina Inspired Model for Enhancing Visibility of Hazy Images. Frontiers in Computational Neuroscience, ID: 151, 1-16, 2015.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Zhang_FCN2016.pdf"
                },
                {
                    "name": "code",
                    "src": BASE+"resource/data/fcn2016/DehazeCode.rar"
                }
            ]
        },
        {
            "id": 2015982,
            "authors": [
                "Tao Xu",
                "Hong-Mei Yan",
                "Xue-Mei Song",
                "Ming Li",
                "Yong-Jie Li"
            ],
            "corresponding_author": [],
            "title": "Silent suppressive surrounds and optimal spatial frequencies of single neurons in cat V1. Neuroscience Letters, 597, 104-110, 2015.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Xu-NeurosciLetters2015.pdf"
                }
            ]
        },
        {
            "id": 2015972,
            "authors": [
                "Tao Xu",
                "Hong-Mei Yan",
                "Xue-Mei Song",
                "Ming Li"
            ],
            "corresponding_author": [],
            "title": "Orientation selectivity in cat primary visual cortex: local and global measurement. Neuroscience Bulletin, 31(5): 561–571.2015.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Xu-NeurosciBull2015.pdf"
                }
            ]
        },
        {
            "id": 2015962,
            "authors": [
                "Kai-Fu Yang",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Potential Roles of the Interaction Between Model V1 Neurons with Orientation-Selective and Non-selective Surround Inhibition in Contour Detection. Frontiers in Neural Circuits, 9:30, 2015.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": "http://journal.frontiersin.org/article/10.3389/fncir.2015.00030/abstract"
                }
            ]
        },
        {
            "id": 2015952,
            "authors": [
                "Kai-Fu Yang",
                "Shao-Bing Gao",
                "Ce-Feng Guo",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Boundary Detection Using Double-Opponency and Spatial Sparseness Constraint. IEEE Trans. Image Processing (TIP), 24(8):2565-2578, 2015.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Yang_TIP2015.pdf"
                },
                {
                    "name": "code",
                    "src": BASE+"resource/data/tip2015/SCOboundary.rar"
                },
                {
                    "name":"project page",
                    "src":BASE+"old_pages/projcvpr2013.html"
                }
            ]
        },
        {
            "id": 2015942,
            "authors": [
                "Xin Gao",
                "Hong-Jin Sun"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Modulation of microsaccade rate by task difficulty revealed through between-and within-trial comparisons. Journal of Vision,15(3), 3:1-15, 2015.",
            "appendix": [
                {
                    "name": "published link",
                    "src": "http://www.journalofvision.org/content/15/3/3.full"
                }
            ]
        },
        {
            "id": 2015932,
            "authors": [
                "Shao-Bing Gao",
                "Kai-Fu Yang",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Color Constancy Using Double-Opponency.  IEEE Transactions on Pattern Analysis and Machine Intelligence (PAMI), 37(10): 1973-1985,2015.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Gao-PAMI2015.pdf"
                },
                {
                    "name": "code",
                    "src": BASE+"resource/data/iccv2013/DOCCcode.rar"
                },
                {
                    "name":"project page",
                    "src":BASE+"old_pages/projcc.html"
                }
            ]
        },
        {
            "id": 2014992,
            "authors": [
                "Kai-Fu Yang",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Multifeature-based Surround Inhibition Improves Contour Detection in Natural Images. IEEE Trans. Image Processing (TIP), 23(12):5020-5032,2014.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Yang_TIP2014.pdf"
                },
                {
                    "name": "code",
                    "src": BASE+"resource/data/tip2014/MCIcontour.rar"
                },
                {
                    "name":"project page",
                    "src":BASE+"old_pages/projtip2014.html"
                }
            ]
        },
        {
            "id": 2014982,
            "authors": [
                "Xue-Mei Song",
                "Zheng-Qiang Dai",
                "Jiao-Jiao Yin",
                "Xing-Zhen Xu",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Ke Chen"
            ],
            "title": "The spatial summation characteristics of three categories of V1 neurons differing in non-classical receptive field modulation properties. Vision Research,96:87–95,2014.",
            "appendix": []
        },
        {
            "id": 2014972,
            "authors": [
                "Tao Xu",
                "Ling Wang",
                "Xue-Mei Song"
            ],
            "corresponding_author": [
                "Chao-Yi Li"
            ],
            "title": "The Detection of Orientation Continuity and Discontinuity by Cat V1 Neurons. Plos One. 8(11), e79723.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": "http://www.plosone.org/article/fetchObject.action?uri=info:doi/10.1371/journal.pone.0079723&representation=PDF"
                }
            ]
        },
        {
            "id": 2014962,
            "authors": [
                "Hong-Wen Cao",
                "Kai-Bin Jin",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Attentional Blink Is Hierarchically Modulated by Phonological, Morphological, Semantic and Lexical Connections between Two Chinese Characters. PloS one 9.8 (2014): e104626.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": "http://www.plosone.org/article/fetchObject.action?uri=info:doi/10.1371/journal.pone.0104626&representation=PDF"
                }
            ]
        },
        {
            "id": 2013992,
            "authors": [
                "Ke Chen",
                "Xue-Mei Song"
            ],
            "corresponding_author": [
                "Chao-Yi Li"
            ],
            "title": "Contrast-Dependent Variations in the Excitatory Classical Receptive Field and Suppressive Nonclassical Receptive Field of Cat Primary Visual Cortex. Cerebral Cortex, 23(2): 283-292, 2012.",
            "appendix": []
        },
        {
            "id": 2012992,
            "authors": [
                "Hao Zhang",
                "Keith M Kendrick"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Both lexical and non-lexical characters are processed during saccadic eye movements. Plos One, 7( 9): e46383, 2012.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": "http://www.plosone.org/article/fetchObject.action?uri=info%3Adoi%2F10.1371%2Fjournal.pone.0046383&representation=PDF"
                }
            ]
        },
        {
            "id": 2012982,
            "authors": [
                "She-Na Lu",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Chun Cai"
            ],
            "title": "Interactions between Surround Suppression and Interocular Suppression in Human Vision, Plos One，7(5): e38093,2012.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": "http://www.plosone.org/article/fetchObject.action?uri=info%3Adoi%2F10.1371%2Fjournal.pone.0038093&representation=PDF"
                }
            ]
        },
        {
            "id": 2011992,
            "authors": [
                "Chi Zeng",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Center-surround interaction with adaptive Inhibition: a computational model for contour detection. NeuroImage, 55(1), 49–66, 2011.",
            "appendix": []
        },
        {
            "id": 2011982,
            "authors": [
                "Chi Zeng",
                "Kai-Fu Yang",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Contour detection based on a non-classical receptive field model with butterfly-shaped inhibition subregions. Neurocomputing, 74：1527–1534, 2011.",
            "appendix": []
        },
        {
            "id": 2011972,
            "authors": [
                "Jian-Gao Yao",
                "Xin Gao",
                "Hong-Mei Yan"
            ],
            "corresponding_author": [
                "Chao-Yi Li"
            ],
            "title": "Field of Attention for Instantaneous Object Recognition. Plos One, 6: e16343, 2011.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": "http://www.plosone.org/article/fetchObject.action?uri=info%3Adoi/10.1371/journal.pone.0016343&representation=PDF"
                }
            ]
        },
        {
            "id": 2011962,
            "authors": [
                "Hong-Mei Yan",
                "Xin-Chuan Wei(",
                "Fei Han"
            ],
            "corresponding_author": [],
            "title": "Monitoring the impact of general anesthesia induction and endotracheal intubations on cardiac performance by phonocardiogram, Biomedical Engineering，23(3): 231-236, 2011.",
            "appendix": []
        },
        {
            "id": 2010992,
            "authors": [
                "Jie Lei"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A Feasible Solution to the Beam-Angle-Optimization Problem in Radiotherapy Planning With a DNA-Based Genetic Algorithm, IEEE Transactions on Biomedical Engineering, 57(3): 499-508, 2010.",
            "appendix": []
        }
    ],
    "conference_proceedings": [
        {
            "id": 2017991,
            "authors": [
                "Xuan Pu",
                "Kai-Fu Yang"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A retinal adaptation model for HDR image compression. Chinese Conference on Computer Vision (CCCV), pp. 37-47,2017.",
            "appendix": []
        },
        {
            "id": 2015991,
            "authors": [
                "Kai-Fu Yang",
                "Shao-Bing Gao"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Efficient Illuminant Estimation for Color Constancy Using Grey Pixels. IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Yang_CVPR2015_GreyPixels-Correction.pdf"
                },
                {
                    "name": "code",
                    "src": BASE+"resource/data/cvpr2015/GPconstancy.rar"
                },
                {
                    "name":"project page",
                    "src":BASE+"old_pages/projcvpr2015.html"
                }
            ]
        },
        {
            "id": 2015981,
            "authors": [
                "Shao-Bing Gao",
                "Wang-Wang Han",
                "Yan-Ze Ren"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "High Dynamic Range Image Rendering with a Luminance-Chromaticity Independent Model. International Conference on Intelligence Science and Big Data Engineering (IScIDE), 2015.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/GAO_IScIDE2015.pdf"
                }
            ]
        },
        {
            "id": 2015971,
            "authors": [
                "Kai-Fu Yang",
                "Xin Gao",
                "Ju-Rong Zhao"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Segmentation-based Salient Object Detection. Chinese Conference on Computer Vision (CCCV), Part I, CCIS 546, pp. 94–102, 2015.",
            "appendix": []
        },
        {
            "id": 2014991,
            "authors": [
                "Tao Deng",
                "An-Dong Chen",
                "Min Gao"
            ],
            "corresponding_author": [
                "Hong-Mei Yan"
            ],
            "title": "Top-down based saliency model in traffic driving environment. Proceeding of IEEE International Conference on Intelligent Transportation Systems (ITSC), pp.75-80, 2014.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Deng_ITSC2014.pdf"
                }
            ]
        },
        {
            "id": 2014981,
            "authors": [
                "Shao-Bing Gao",
                "Wang-Wang Han",
                "Kai-Fu Yang",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Efficient Color Constancy with Local Surface Reflectance Statistics. Proceeding of European Conference on Computer Vision (ECCV), Part II, LNCS 8690, PP.158-173, 2014",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Gao_ECCV2014.pdf"
                },
                {
                    "name": "code&results",
                    "src": BASE+"resource/data/eccv2014/eccv2014source.rar"
                },
                {
                    "name":"project page",
                    "src":BASE+"old_pages/projeccv2014.html"
                }
            ]
        },
        {
            "id": 2013991,
            "authors": [
                "Shao-Bing Gao",
                "Kai-Fu Yang",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A Color Constancy Model with Double-Opponent Mechanisms. Proceeding of IEEE International Conference on Computer Vision (ICCV), pp.929-936, 2013. (Oral, acceptance rate: 2.52%)",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Gao_ICCV2013_Final.pdf"
                },
                {
                    "name": "code",
                    "src": BASE+"resource/data/iccv2013/DOCCcode.rar"
                },
                {
                    "name":"project page",
                    "src":BASE+"old_pages/projcc.html"
                }
            ]
        },
        {
            "id": 2013981,
            "authors": [
                "Kai-Fu Yang",
                "Shao-Bing Gao",
                "Chao-Yi Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Efficient Color Boundary Detection with Color-opponent Mechanisms. Proceeding of IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pp.2810-2817，2013.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/Yang_CVPR2013_Final.pdf"
                },
                {
                    "name": "code",
                    "src": BASE+"resource/data/cvpr2013/COBoundary.rar"
                },
                {
                    "name":"project page",
                    "src":BASE+"old_pages/projcvpr2013.html"
                }
            ]
        },
        {
            "id": 2012991,
            "authors": [
                "Shu-Yan Li"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A Modified Selective Attention Model for Salient Region Detection in Real Scenes, C.-L. Liu, C. Zhang, and L. Wang (Eds.): Proceeding of Chinese Conference on Pattern Recognition (CCPR), CCIS 321, pp. 227–234, 2012.",
            "appendix": []
        },
        {
            "id": 2012981,
            "authors": [
                "Shao-Bing Gao"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A Retinal Mechanism Based Color Constancy Model, C.-L. Liu, C. Zhang, and L. Wang (Eds.): Proceeding of Chinese Conference on Pattern Recognition (CCPR), CCIS 321, pp. 422–429, 2012.",
            "appendix": [
                {
                    "name": "pdf",
                    "src": BASE+"resource/papers/GAO_CCPR2012.pdf"
                }
            ]
        },
        {
            "id": 2012971,
            "authors": [
                "Kai-Fu Yang"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A Contour Detection Model based on Surround Inhibition with Multiple Cues, C.-L. Liu, C. Zhang, and L. Wang (Eds.): Proceeding of Chinese Conference on Pattern Recognition (CCPR), CCIS 321, pp. 145–152, 2012.",
            "appendix": []
        },
        {
            "id": 2008991,
            "authors": [
                "Li Long"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "Contour Detection Based On the Property of Orientation Selective Inhibition of Non-classical Receptive Field, Proceeding of IEEE International Conference on Cybernetics and Intelligent Systems (CIS), 1002-1006, 2008.",
            "appendix": []
        },
        {
            "id": 2008981,
            "authors": [
                "Pei Jiang"
            ],
            "corresponding_author": [
                "Yong-Jie Li"
            ],
            "title": "A Hybrid Face Recognition Algorithm Based on WT, NMFs and SVM, Proceeding of IEEE International Conference on Cybernetics and Intelligent Systems (CIS) ,734-737, 2008.",
            "appendix": []
        }
    ],
    "book_chapters": [
        {
            "id": 2011990,
            "authors": [
                "Ning Qian",
                "Yong-Jie Li"
            ],
            "corresponding_author": [],
            "title": "Physiologically based models of binocular depth perception. A chapter in Vision in 3D Environments, L.R. Harris and M. Jenkin (Eds). Cambridge University Press, Cambridge, UK, 2011.",
            "appendix": []
        }
    ]
}
export {publications}