const contractBytecode =
  'cb_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aW1lc3RhbXARPR6JaCVnZXRfc3RhdGURRNZEHxFpbml0EVFXpvkxY29tcHV0ZV9oYXNoEVjLtZKJLlJvY2tQYXBlclNjaXNzb3JzLnJlcXVpcmVfcGxheWVyMBFlpeAPLUNoYWluLmV2ZW50EWrApr7BLlJvY2tQYXBlclNjaXNzb3JzLmVuc3VyZV9wbGF5ZXIwX3R1cm5fdG9fcmV2ZWFsEXtiH9NdcGxheWVyMF9kaXNwdXRlX25vX21vdmURk0NDObkuUm9ja1BhcGVyU2Npc3NvcnMuZW5zdXJlX3BsYXllcjFfdHVybl90b19tb3ZlEagFMsAZcmV2ZWFsEauIMtE5LlN0cmluZy5jb25jYXQRtLEvhmVwbGF5ZXIxX2Rpc3B1dGVfbm9fcmV2ZWFsEcLTCMx5LlJvY2tQYXBlclNjaXNzb3JzLnN0cl90b19tb3ZlEcYWcVyJLlJvY2tQYXBlclNjaXNzb3JzLnJlcXVpcmVfcGxheWVyMRHJV7fPpS5Sb2NrUGFwZXJTY2lzc29ycy5lbnN1cmVfaWZfa2V5X2lzX3ZhbGlkEc5HFWA5LlN0cmluZy5zaGEyNTYRz7/qGnkuUm9ja1BhcGVyU2Npc3NvcnMucmVzZXRfc3RhdGUR6QHY/xkuXjEzMTQR78tQ7z0uT3B0aW9uLmRlZmF1bHSCLwCFNi4xLjABsLPzxw==';
export default contractBytecode;
