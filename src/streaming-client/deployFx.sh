#!/bin/bash
CONTEXT=ohip.streaming
npx poly function add sclient src/streaming-client/sclient.ts --context $CONTEXT --server --description "OHIP Streaming API client for PolyAPI"