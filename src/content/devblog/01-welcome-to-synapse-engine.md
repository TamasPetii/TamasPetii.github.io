---
title: "Welcome to the Synapse Engine Devblog!"
description: "A brief introduction to the Synapse Engine: a research-oriented, high-performance GPU-driven rendering engine."
pubDate: "2026-05-11"
tags: ["Introduction", "GPU-driven", "Vulkan", "Engine Dev"]
---

# Welcome to the Synapse Engine Devblog!

I am excited to introduce the **Synapse Engine**, a strictly research-oriented, high-performance GPU-driven rendering engine that utilizes state-of-the-art graphics techniques.

This devblog series was created to provide a detailed, under-the-hood look at the engine's architecture in a step-by-step, *LearnOpenGL*-style tutorial format.

## The Main Focus of the Synapse Engine

One of the most significant challenges for modern AAA game engines is the efficient real-time management of millions of entities within a hybrid CPU-GPU environment. The traditional object-oriented paradigm presents severe performance bottlenecks in this context, manifesting as frequent cache misses, poor parallelizability, and cumbersome CPU-GPU synchronization.

The Synapse Engine overcomes these limitations through the following key technologies and architectures:

### 1. Data-Oriented Entity-Component-System (ECS)
The engine is built on a unique, segmented data-oriented ECS architecture. Components are simple data structures laid out in contiguous memory (utilizing a Static-Dynamic-Stream partition), which ensures maximum cache locality and enables SIMD-friendly parallel processing.

### 2. Fully GPU-Driven Rendering Pipeline
The CPU's role during rendering is minimized. Complete visibility determination (culling) and the generation of indirect draw commands are executed entirely on the GPU using Compute Shaders. This drastically reduces CPU overhead and driver bottlenecks.

### 3. Hierarchical Culling
The system filters geometry across multiple levels (Model, Mesh, and Meshlet levels), ensuring that only truly visible elements are processed:
- **Frustum Culling:** Discarding objects outside the camera's field of view.
- **Hi-Z Occlusion Culling:** Filtering out elements completely occluded by closer objects.
- **Zero-Pixel Triangle Culling:** Discarding objects that are too small to cover a single pixel on the screen.
- **Cone Culling (Meshlet level):** Discarding back-facing meshlets before the rasterization stage.

### 4. Modern Mesh Shader Support
Alongside the traditional Vertex/Fragment pipeline, the engine fully supports the modern **Task/Mesh Shader** architecture. Geometry is partitioned into small, optimized clusters (meshlets), enabling fine-grained GPU-side culling and highly efficient vertex reuse.

## Open Source Reference Implementation

In the spirit of research and knowledge sharing, the full reference implementation of the Synapse Engine is open-source and publicly available. If you are interested in the code or want to explore the architecture yourself, visit the repository:

**[Synapse Engine GitHub Repository](https://github.com/TamasPetii/SynapseEngine)**

In the upcoming chapters, we will dive deeper into each of the engine's subsystems, starting with the data-oriented ECS layout and moving all the way to the implementation details of Mesh Shaders. Stay tuned!
