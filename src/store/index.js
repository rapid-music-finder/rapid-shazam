import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    songDetails: {
      songName: "",
      albumTitle: "",
      thumbnails: "",
      genre: "",
      releaseDate: "",
      artist: "",
      ytVideo: ""
    },
    concertDetails: {
      events: [
        {
          "name": "Jonas Brothers: Happiness Begins Tour",
          "type": "event",
          "id": "Z7r9jZ1Ae_Sbd",
          "test": false,
          "url": "http://www.ticketsnow.com/InventoryBrowse/TicketList.aspx?PID=2673603",
          "locale": "en-us",
          "images": [
            {
              "ratio": "3_2",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_ARTIST_PAGE_3_2.jpg",
              "width": 305,
              "height": 203,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_EVENT_DETAIL_PAGE_16_9.jpg",
              "width": 205,
              "height": 115,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              "width": 2048,
              "height": 1152,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_RETINA_LANDSCAPE_16_9.jpg",
              "width": 1136,
              "height": 639,
              "fallback": false
            },
            {
              "ratio": "3_2",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_TABLET_LANDSCAPE_3_2.jpg",
              "width": 1024,
              "height": 683,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_TABLET_LANDSCAPE_16_9.jpg",
              "width": 1024,
              "height": 576,
              "fallback": false
            },
            {
              "ratio": "4_3",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_CUSTOM.jpg",
              "width": 305,
              "height": 225,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_RECOMENDATION_16_9.jpg",
              "width": 100,
              "height": 56,
              "fallback": false
            },
            {
              "ratio": "3_2",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_RETINA_PORTRAIT_3_2.jpg",
              "width": 640,
              "height": 427,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_RETINA_PORTRAIT_16_9.jpg",
              "width": 640,
              "height": 360,
              "fallback": false
            }
          ],
          "sales": {
            "public": {
              "startDateTime": "2019-05-08T14:00:00Z",
              "startTBD": false,
              "endDateTime": "2019-08-18T23:30:00Z"
            }
          },
          "dates": {
            "start": {
              "localDate": "2019-08-18",
              "localTime": "19:30:00",
              "dateTime": "2019-08-18T23:30:00Z",
              "dateTBD": false,
              "dateTBA": false,
              "timeTBA": false,
              "noSpecificTime": false
            },
            "status": {
              "code": "onsale"
            },
            "spanMultipleDays": false
          },
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7nJ",
                "name": "Music"
              },
              "genre": {
                "id": "KnvZfZ7vAev",
                "name": "Pop"
              },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vkEl",
                "name": "Pop Rock"
              },
              "family": false
            }
          ],
          "promoter": {
            "id": "653",
            "name": "LIVE NATION MUSIC",
            "description": "LIVE NATION MUSIC / NTL / USA"
          },
          "promoters": [
            {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            }
          ],
          "outlets": [
            {
              "url": "http://ev15.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=JB19&linkID=global-wachovia&shopperContext=&caller=&appCode",
              "type": "venueBoxOffice"
            },
            {
              "url": "https://www.ticketmaster.com/jonas-brothers-happiness-begins-tour-philadelphia-pennsylvania-08-18-2019/event/Z7r9jZ1Ae_Sbd",
              "type": "tmMarketPlace"
            }
          ],
          "seatmap": {
            "staticUrl": "http://resale.ticketmaster.com.au/akamai-content/maps/564-9000-2-main.gif"
          },
          "_links": {
            "self": {
              "href": "/discovery/v2/events/Z7r9jZ1Ae_Sbd?locale=en-us"
            },
            "attractions": [
              {
                "href": "/discovery/v2/attractions/K8vZ9175T17?locale=en-us"
              },
              {
                "href": "/discovery/v2/attractions/K8vZ9173lT7?locale=en-us"
              },
              {
                "href": "/discovery/v2/attractions/K8vZ917bAlf?locale=en-us"
              }
            ],
            "venues": [
              {
                "href": "/discovery/v2/venues/Z6r9jZk6Ae?locale=en-us"
              }
            ]
          },
          "_embedded": {
            "venues": [
              {
                "name": "Wells Fargo Center-PA",
                "type": "venue",
                "id": "Z6r9jZk6Ae",
                "test": false,
                "locale": "en-us",
                "postalCode": "19148",
                "timezone": "America/New_York",
                "city": {
                  "name": "Philadelphia"
                },
                "state": {
                  "name": "Pennsylvania",
                  "stateCode": "PA"
                },
                "country": {
                  "name": "United States Of America",
                  "countryCode": "US"
                },
                "address": {
                  "line1": "3601 South Broad St."
                },
                "location": {
                  "longitude": "-75.153397",
                  "latitude": "39.910999"
                },
                "dmas": [
                  {
                    "id": 358
                  }
                ],
                "upcomingEvents": {
                  "_total": 45,
                  "tmr": 31,
                  "ticketmaster": 14
                },
                "_links": {
                  "self": {
                    "href": "/discovery/v2/venues/Z6r9jZk6Ae?locale=en-us"
                  }
                }
              }
            ],
            "attractions": [
              {
                "name": "Jonas Brothers",
                "type": "attraction",
                "id": "K8vZ9175T17",
                "test": false,
                "url": "https://www.ticketmaster.com/jonas-brothers-tickets/artist/1052712",
                "locale": "en-us",
                "externalLinks": {
                  "lastfm": [
                    {
                      "url": "http://www.last.fm/music/Jonas%20Brothers"
                    }
                  ],
                  "wiki": [
                    {
                      "url": "https://en.wikipedia.org/wiki/Jonas_Brothers"
                    }
                  ],
                  "musicbrainz": [
                    {
                      "id": "6e019bc6-5c23-4935-94f0-4a896631d846"
                    }
                  ],
                  "homepage": [
                    {
                      "url": "http://www.jonasbrothers.com/"
                    }
                  ]
                },
                "images": [
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_ARTIST_PAGE_3_2.jpg",
                    "width": 305,
                    "height": 203,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_EVENT_DETAIL_PAGE_16_9.jpg",
                    "width": 205,
                    "height": 115,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    "width": 2048,
                    "height": 1152,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_RETINA_LANDSCAPE_16_9.jpg",
                    "width": 1136,
                    "height": 639,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_TABLET_LANDSCAPE_3_2.jpg",
                    "width": 1024,
                    "height": 683,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_TABLET_LANDSCAPE_16_9.jpg",
                    "width": 1024,
                    "height": 576,
                    "fallback": false
                  },
                  {
                    "ratio": "4_3",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_CUSTOM.jpg",
                    "width": 305,
                    "height": 225,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_RECOMENDATION_16_9.jpg",
                    "width": 100,
                    "height": 56,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_RETINA_PORTRAIT_3_2.jpg",
                    "width": 640,
                    "height": 427,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/29a/c1a7cb3e-d421-470c-b1ce-45f21564029a_1039571_RETINA_PORTRAIT_16_9.jpg",
                    "width": 640,
                    "height": 360,
                    "fallback": false
                  }
                ],
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7nJ",
                      "name": "Music"
                    },
                    "genre": {
                      "id": "KnvZfZ7vAeA",
                      "name": "Rock"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7v6F1",
                      "name": "Pop"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7v7nI",
                      "name": "Undefined"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7v7lJ",
                      "name": "Undefined"
                    },
                    "family": false
                  }
                ],
                "upcomingEvents": {
                  "_total": 83,
                  "tmr": 10,
                  "ticketmaster": 73
                },
                "_links": {
                  "self": {
                    "href": "/discovery/v2/attractions/K8vZ9175T17?locale=en-us"
                  }
                }
              },
              {
                "name": "Bebe Rexha",
                "type": "attraction",
                "id": "K8vZ9173lT7",
                "test": false,
                "url": "https://www.ticketmaster.com/bebe-rexha-tickets/artist/2018741",
                "locale": "en-us",
                "externalLinks": {
                  "youtube": [
                    {
                      "url": "https://www.youtube.com/channel/UC5-gWZXAQqSGVfPHkA7NRiQ"
                    }
                  ],
                  "twitter": [
                    {
                      "url": "https://twitter.com/BebeRexha"
                    }
                  ],
                  "facebook": [
                    {
                      "url": "https://www.facebook.com/beberexha"
                    }
                  ],
                  "wiki": [
                    {
                      "url": "https://en.wikipedia.org/wiki/Bebe_Rexha"
                    }
                  ],
                  "musicbrainz": [
                    {
                      "id": "db8fad3a-e131-47a1-8782-c2ee93708cdd"
                    }
                  ]
                },
                "images": [
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_RECOMENDATION_16_9.jpg",
                    "width": 100,
                    "height": 56,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_RETINA_PORTRAIT_16_9.jpg",
                    "width": 640,
                    "height": 360,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_EVENT_DETAIL_PAGE_16_9.jpg",
                    "width": 205,
                    "height": 115,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_TABLET_LANDSCAPE_16_9.jpg",
                    "width": 1024,
                    "height": 576,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_ARTIST_PAGE_3_2.jpg",
                    "width": 305,
                    "height": 203,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_TABLET_LANDSCAPE_3_2.jpg",
                    "width": 1024,
                    "height": 683,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_RETINA_PORTRAIT_3_2.jpg",
                    "width": 640,
                    "height": 427,
                    "fallback": false
                  },
                  {
                    "ratio": "4_3",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_CUSTOM.jpg",
                    "width": 305,
                    "height": 225,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    "width": 2048,
                    "height": 1152,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/e67/ae35ec3b-b49a-47c3-bb97-5fb35561ce67_1045921_RETINA_LANDSCAPE_16_9.jpg",
                    "width": 1136,
                    "height": 639,
                    "fallback": false
                  }
                ],
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7nJ",
                      "name": "Music"
                    },
                    "genre": {
                      "id": "KnvZfZ7vAeA",
                      "name": "Rock"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7v6F1",
                      "name": "Pop"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7v7nI",
                      "name": "Undefined"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7v7lJ",
                      "name": "Undefined"
                    },
                    "family": false
                  }
                ],
                "upcomingEvents": {
                  "_total": 74,
                  "tmr": 9,
                  "ticketmaster": 65
                },
                "_links": {
                  "self": {
                    "href": "/discovery/v2/attractions/K8vZ9173lT7?locale=en-us"
                  }
                }
              },
              {
                "name": "Jordan McGraw",
                "type": "attraction",
                "id": "K8vZ917bAlf",
                "test": false,
                "url": "https://www.ticketmaster.com/jordan-mcgraw-tickets/artist/2640433",
                "locale": "en-us",
                "images": [
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_3_2.jpg",
                    "width": 640,
                    "height": 427,
                    "fallback": true
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
                    "width": 205,
                    "height": 115,
                    "fallback": true
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg",
                    "width": 640,
                    "height": 360,
                    "fallback": true
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    "width": 2048,
                    "height": 1152,
                    "fallback": true
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
                    "width": 1024,
                    "height": 576,
                    "fallback": true
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg",
                    "width": 1136,
                    "height": 639,
                    "fallback": true
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_3_2.jpg",
                    "width": 1024,
                    "height": 683,
                    "fallback": true
                  },
                  {
                    "ratio": "4_3",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_CUSTOM.jpg",
                    "width": 305,
                    "height": 225,
                    "fallback": true
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RECOMENDATION_16_9.jpg",
                    "width": 100,
                    "height": 56,
                    "fallback": true
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg",
                    "width": 305,
                    "height": 203,
                    "fallback": true
                  }
                ],
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7nJ",
                      "name": "Music"
                    },
                    "genre": {
                      "id": "KnvZfZ7vAeA",
                      "name": "Rock"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7v6F1",
                      "name": "Pop"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7v7la",
                      "name": "Individual"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAd7",
                      "name": "Musician"
                    },
                    "family": false
                  }
                ],
                "upcomingEvents": {
                  "_total": 62,
                  "tmr": 7,
                  "ticketmaster": 55
                },
                "_links": {
                  "self": {
                    "href": "/discovery/v2/attractions/K8vZ917bAlf?locale=en-us"
                  }
                }
              }
            ]
          }
        }
      ]
    },
    lyrics: [
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh",
      "Spent 24 hours I need more hours with you",
      "You spent the weekend getting even ooh"
    ],
    searched: false
  },
  mutations: {
    setSongList(vuexContext, payload) {
      vuexContext.songDetails.albumTitle = payload[0].albumTitle;
      vuexContext.songDetails.artist = payload[0].artist;
      vuexContext.songDetails.songName = payload[0].songName;
      vuexContext.songDetails.genre = payload[0].genre.join(" ");
      vuexContext.songDetails.thumbnails =
        payload[0].thumbnails["high-quality"];
      vuexContext.songDetails.releaseDate = payload[0].releaseDate;
      vuexContext.songDetails.artist = payload[0].artist;
      vuexContext.songDetails.ytVideo = `https://www.youtube.com/embed/${
        payload[0].ytVideo
      }`;
      vuexContext.searched = true;
    },
    backToSearch(vuexContext) {
      vuexContext.searched = !vuexContext.searched
    }
  },
  getters: {
    songList(state) {
      return state.songList;
    }
  }
});

export default store;
