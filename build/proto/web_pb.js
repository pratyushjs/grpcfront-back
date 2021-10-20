/**
 * @fileoverview gRPC-Web generated client stub for randomPackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.randomPackage = require('./random_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.randomPackage.RandomClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.randomPackage.RandomPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.randomPackage.InitiateRequest,
 *   !proto.randomPackage.InitiateResponse>}
 */
const methodDescriptor_Random_ChatInitiate = new grpc.web.MethodDescriptor(
  '/randomPackage.Random/ChatInitiate',
  grpc.web.MethodType.UNARY,
  proto.randomPackage.InitiateRequest,
  proto.randomPackage.InitiateResponse,
  /**
   * @param {!proto.randomPackage.InitiateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.randomPackage.InitiateResponse.deserializeBinary
);


/**
 * @param {!proto.randomPackage.InitiateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.randomPackage.InitiateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.randomPackage.InitiateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.randomPackage.RandomClient.prototype.chatInitiate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/randomPackage.Random/ChatInitiate',
      request,
      metadata || {},
      methodDescriptor_Random_ChatInitiate,
      callback);
};


/**
 * @param {!proto.randomPackage.InitiateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.randomPackage.InitiateResponse>}
 *     Promise that resolves to the response
 */
proto.randomPackage.RandomPromiseClient.prototype.chatInitiate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/randomPackage.Random/ChatInitiate',
      request,
      metadata || {},
      methodDescriptor_Random_ChatInitiate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.randomPackage.MessageRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Random_SendMessage = new grpc.web.MethodDescriptor(
  '/randomPackage.Random/SendMessage',
  grpc.web.MethodType.UNARY,
  proto.randomPackage.MessageRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.randomPackage.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.randomPackage.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.randomPackage.RandomClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/randomPackage.Random/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Random_SendMessage,
      callback);
};


/**
 * @param {!proto.randomPackage.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.randomPackage.RandomPromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/randomPackage.Random/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Random_SendMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.randomPackage.StreamRequest,
 *   !proto.randomPackage.UserStreamResponse>}
 */
const methodDescriptor_Random_UserStream = new grpc.web.MethodDescriptor(
  '/randomPackage.Random/UserStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.randomPackage.StreamRequest,
  proto.randomPackage.UserStreamResponse,
  /**
   * @param {!proto.randomPackage.StreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.randomPackage.UserStreamResponse.deserializeBinary
);


/**
 * @param {!proto.randomPackage.StreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.randomPackage.UserStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.randomPackage.RandomClient.prototype.userStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/randomPackage.Random/UserStream',
      request,
      metadata || {},
      methodDescriptor_Random_UserStream);
};


/**
 * @param {!proto.randomPackage.StreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.randomPackage.UserStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.randomPackage.RandomPromiseClient.prototype.userStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/randomPackage.Random/UserStream',
      request,
      metadata || {},
      methodDescriptor_Random_UserStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.randomPackage.StreamRequest,
 *   !proto.randomPackage.StreamMessage>}
 */
const methodDescriptor_Random_ChatStream = new grpc.web.MethodDescriptor(
  '/randomPackage.Random/ChatStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.randomPackage.StreamRequest,
  proto.randomPackage.StreamMessage,
  /**
   * @param {!proto.randomPackage.StreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.randomPackage.StreamMessage.deserializeBinary
);


/**
 * @param {!proto.randomPackage.StreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.randomPackage.StreamMessage>}
 *     The XHR Node Readable Stream
 */
proto.randomPackage.RandomClient.prototype.chatStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/randomPackage.Random/ChatStream',
      request,
      metadata || {},
      methodDescriptor_Random_ChatStream);
};


/**
 * @param {!proto.randomPackage.StreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.randomPackage.StreamMessage>}
 *     The XHR Node Readable Stream
 */
proto.randomPackage.RandomPromiseClient.prototype.chatStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/randomPackage.Random/ChatStream',
      request,
      metadata || {},
      methodDescriptor_Random_ChatStream);
};


module.exports = proto.randomPackage;
