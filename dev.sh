#!/usr/bin/env bash

read -p 'Please enter test name: ' name

touch "/src/${name:=test}.js"