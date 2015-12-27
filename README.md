# Laglang - A web application to support learning of foreign language

## Dependencies

* [golang](http://golang.org/)
* [node.js](https://nodejs.org/) with [npm](https://www.npmjs.com/), only to build the application bundle at compile time
* [GNU make](https://www.gnu.org/software/make/)
* [fswatch](https://github.com/emcrisostomo/fswatch/)

Note that probably not works at windows.

## Install

Clone the repo:

```
$ git clone git@github.com:zoetrope/laglang.git && cd laglang
```
Install javascript dependencies:

```
$ npm i
```
Install Golang dependencies:

```
$ export GOPATH=`pwd` # the most important step, ensure that you do it
$ export GOBIN=$GOPATH/bin # optional, redefine, if it already was defined
$ go get app
$ go get github.com/jteeuwen/go-bindata/...
```
Start dev server:

```
$ make serve
```
that's it. Open [http://localhost:5001/](http://localhost:5001/)(if you use default port) at your browser. Now you ready to start coding your awesome project.

## Build

Install dependencies and just type `NODE_ENV=production make build`. This rule is producing webpack build and regular golang build after that. Result you can find at `$GOPATH/bin`.

