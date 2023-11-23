import HttpStatusCode from "~/utils/http-status-codes";

export const throwInternalServerErrorException = buildException(
  HttpStatusCode.InternalServerError
);

export const throwBadRequestException = buildException(
  HttpStatusCode.BadRequest
);

export const throwNotFoundException = buildException(HttpStatusCode.NotFound);

export const throwMethodNotAllowedException = function methodNotAllowed(
  allowedMethodsList: string[],
  methodNotAllowed?: string | undefined
) {
  const errorMessage = `Method ${
    methodNotAllowed ?? "[unknown]"
  } is not allowed. Please use one of the following methods: ${allowedMethodsList.join(
    ", "
  )}`;

  throw new Response(errorMessage, {
    status: HttpStatusCode.MethodNotAllowed,
  });
};

export const throwUnauthorizedException = buildException(
  HttpStatusCode.Unauthorized
);

export const throwForbiddenException = buildException(HttpStatusCode.Forbidden);

function buildException(statusCode: HttpStatusCode) {
  return (message?: string): never => {
    throw new Response(message ?? `Unknown Error`, {
      status: statusCode,
    });
  };
}
