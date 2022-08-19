#include "MainComponentsRegistry.h"

#include <CoreComponentsRegistry.h>
#include <fbjni/fbjni.h>
#include <react/renderer/componentregistry/ComponentDescriptorProviderRegistry.h>
#include <react/renderer/components/rncore/ComponentDescriptors.h>

namespace facebook {
namespace react {

MainComponentsRegistry::MainComponentsRegistry(ComponentFactory *delegate) {***REMOVED***

std::shared_ptr<ComponentDescriptorProviderRegistry const>
MainComponentsRegistry::sharedProviderRegistry() {
  auto providerRegistry = CoreComponentsRegistry::sharedProviderRegistry();

  // Custom Fabric Components go here. You can register custom
  // components coming from your App or from 3rd party libraries here.
  //
  // providerRegistry->add(concreteComponentDescriptorProvider<
  //        AocViewerComponentDescriptor>());
  return providerRegistry;
***REMOVED***

jni::local_ref<MainComponentsRegistry::jhybriddata>
MainComponentsRegistry::initHybrid(
    jni::alias_ref<jclass>,
    ComponentFactory *delegate) {
  auto instance = makeCxxInstance(delegate);

  auto buildRegistryFunction =
      [](EventDispatcher::Weak const &eventDispatcher,
         ContextContainer::Shared const &contextContainer)
      -> ComponentDescriptorRegistry::Shared {
    auto registry = MainComponentsRegistry::sharedProviderRegistry()
                        ->createComponentDescriptorRegistry(
                            {eventDispatcher, contextContainer***REMOVED***);

    auto mutableRegistry =
        std::const_pointer_cast<ComponentDescriptorRegistry>(registry);

    mutableRegistry->setFallbackComponentDescriptor(
        std::make_shared<UnimplementedNativeViewComponentDescriptor>(
            ComponentDescriptorParameters{
                eventDispatcher, contextContainer, nullptr***REMOVED***));

    return registry;
  ***REMOVED***;

  delegate->buildRegistryFunction = buildRegistryFunction;
  return instance;
***REMOVED***

void MainComponentsRegistry::registerNatives() {
  registerHybrid({
      makeNativeMethod("initHybrid", MainComponentsRegistry::initHybrid),
  ***REMOVED***);
***REMOVED***

***REMOVED*** // namespace react
***REMOVED*** // namespace facebook
