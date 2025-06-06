plugins {
	java
  alias(libs.plugins.graalvm.native)
	alias(libs.plugins.spring.dependency.management)
	alias(libs.plugins.spring.boot)
}

group = "org.sagebionetworks.openchallenges"
version = "0.0.1-SNAPSHOT"

java {
  toolchain {
    languageVersion = JavaLanguageVersion.of(21)
    nativeImageCapable = true
  }
}

graalvmNative {
  binaries {
    named("main") {
      // Enable GraalVM Toolchain detection
      javaLauncher.set(javaToolchains.launcherFor {
        languageVersion.set(JavaLanguageVersion.of(21))
        vendor.set(JvmVendorSpec.matching("Oracle"))
      })

      imageName.set(project.name)
      buildArgs.add("--static")
      buildArgs.add("--libc=musl")
      buildArgs.add("--no-fallback")
    }
    named("test") {
      // Enable GraalVM Toolchain detection
      javaLauncher.set(javaToolchains.launcherFor {
        languageVersion.set(JavaLanguageVersion.of(21))
        vendor.set(JvmVendorSpec.matching("Oracle"))
      })

      buildArgs.add("-O0")
    }
  }
}

repositories {
	mavenCentral()
  mavenLocal()
}

dependencies {
	implementation(libs.spring.ai.starter.mcp.server.webmvc)
  implementation(libs.openchallenges.api.client.java)
  compileOnly(libs.lombok)
  annotationProcessor(libs.lombok)
	testImplementation(libs.spring.boot.starter.test)
  testCompileOnly(libs.lombok)
  testAnnotationProcessor(libs.lombok)
	testRuntimeOnly(libs.junit.platform.launcher)
}

tasks.withType<Test>().configureEach {
  maxParallelForks = (Runtime.getRuntime().availableProcessors() / 2).coerceAtLeast(1)
  
  useJUnitPlatform()

  testLogging {
    events("passed", "skipped", "failed")
  }
}

tasks.named<org.springframework.boot.gradle.tasks.bundling.BootBuildImage>("bootBuildImage") {
  imageName.set("ghcr.io/sage-bionetworks/${project.name}-base:local")
}