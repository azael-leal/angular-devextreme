export enum ErrorMessageEnum {
  NeedToLoginAgain = 'Por motivos de seguridad, es necesario iniciar sesión nuevamente',
  NeedToBeLoggedIn = 'Es necesario que inicies sesión',
  UserSessionNotStored = 'No se pudo obtener la información del usuario logeado, por favor, inicia sesión nuevamente.',
  UserSessionNotConfigured = 'Ocurrió un error al configurar la sesión del usuario, por favor, inicia sesión nuevamente.',
  BadResolverRequest = 'No se pudo obtener la información. Por favor, inténtalo nuevamente',
  NotAdded = 'No se pudo agregar la información.',
  NotUpdated = 'No se pudo actualizar la informacón',
  ElementNotFound = 'Elemento No encontrado',
  SameElementAdded = 'El elemento ya se encuentra agregado',
  NotRestarted = 'No se pudo restablecer la información',
  ImportedDataWIthErrors = 'Se agregó la información, sin embargo, existen errores, por favor, revísalos',
}
