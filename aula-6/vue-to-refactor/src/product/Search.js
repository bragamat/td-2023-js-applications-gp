// currentUser: {
//     type: Object,
//     required: true,
//   },
//   api: {
//     type: Object,
//     required: false,
//   },
//   validator: {
//     type: Object,
//     required: false
//   },
//   errorHandler: {
//     type: Object,
//     required: false
//   }

export const buildSearch = () => ({
  currentUser: {},
  validator: {},
  errorHandler: {},
  api: {},
})


export const builder = {
  setCurrentUser: function (search, user){
    search.currentUser = user

    this.search = search
    return this
  },

  setApi: function (search, api) {
    search.api = api

    this.search = search

    return this
  },

  setErrorHandler: function (search, errorHandler) {
    search.errorHandler = errorHandler

    this.search = search

    return this
  },


  build: function () {
    return this.search
  },
}



