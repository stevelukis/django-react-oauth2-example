from rest_framework.authtoken.models import Token


class TokenStrategy:
    @classmethod
    def obtain(cls, user):
        token, _ = Token.objects.get_or_create(user=user)

        return {
            "access": str(token),
        }
